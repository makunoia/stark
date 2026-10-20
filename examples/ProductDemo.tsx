"use client";

import React, { createContext, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { AdminLayout, Button, TextButton, Checkbox, Dropdown, DataTable, DetailPageTemplate, FormPageTemplate, Input, ListPageTemplate, LoginTemplate, PageSection, Switch, Textarea, type AdminLinkProps, type DataTableColumnDef, type DataTableFilter, type DataTableState } from "stark-lib";
import { productFixtures, currency, type Product, type ProductStatus } from "./products";

type DemoContextValue = {
  products: Product[]; updateProducts: (ids: string[], patch: Partial<Product>) => void;
  navigate: (href: string) => void; notice: string; setNotice: (message: string) => void;
};
const DemoContext = createContext<DemoContextValue | null>(null);
export function DemoProvider({ children, navigate }: { children: ReactNode; navigate: (href: string) => void }) {
  const [products, setProducts] = useState(() => productFixtures.map(product => ({ ...product })));
  const [notice, setNotice] = useState("");
  return <DemoContext.Provider value={{ products, navigate, notice, setNotice, updateProducts: (ids, patch) => setProducts(previous => previous.map(product => ids.includes(product.id) ? { ...product, ...patch } : product)) }}>{children}</DemoContext.Provider>;
}
export function useDemo() {
  const value = useContext(DemoContext);
  if (!value) throw new Error("Product demos must be inside DemoProvider.");
  return value;
}
export function DemoLink({ href, children, onClick, ...props }: AdminLinkProps) {
  const { navigate } = useDemo();
  return <a {...props} href={href} onClick={event => {
    onClick?.(event);
    if (!event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && props.target !== "_blank") { event.preventDefault(); navigate(href); }
  }}>{children}</a>;
}
export function DemoBrand() { return <span className="demo-brand"><span aria-hidden="true" className="demo-brand-mark">✳</span> stark<span className="demo-brand-dot"> / </span><span className="demo-brand-subtitle">store</span></span>; }
export function ProductImage({ product }: { product: Product }) { return product.image ? <img className="demo-product-image" src={product.image} alt="" width={48} height={48} /> : <span className="demo-image-fallback" aria-label="No image" role="img">◇</span>; }
export function Status({ value }: { value: ProductStatus }) { return <span className="demo-status" data-status={value}><span aria-hidden="true">●</span>{value}</span>; }
const wait = () => new Promise<void>(resolve => setTimeout(resolve, 450));

export function LoginDemo({ failure = false }: { failure?: boolean }) {
  const { navigate } = useDemo();
  const [recovery, setRecovery] = useState(false);
  return <LoginTemplate branding={<DemoBrand />} supportingContent={<><p className="demo-eyebrow">YOUR WORK, WELL ORGANIZED</p><h2>A little clarity.<br />A lot of possibility.</h2><p>One considered space to manage your products, keep things moving, and focus on what comes next.</p><div className="demo-login-art" aria-hidden="true"><span>✳</span><span>◇</span><span>＋</span></div></>}
    description="Welcome to the Stark store demo. Use any valid email and a nonempty password."
    recoveryLink={<TextButton type="button" intent="primary" className="stark-template-button" label="Forgot password?" onClick={() => setRecovery(true)} />}
    footer={<>{recovery && <p role="status">This is a UI demo. Connect your recovery service through the recovery-link slot.</p>}<p>Demo only · No authentication or credentials are stored.</p><TextButton asChild label="Explore the templates" intent="primary" className="stark-template-button"><DemoLink href="/" /></TextButton></>}
    onSubmit={async () => { await wait(); if (failure) throw new Error("Demo sign-in failed. Please try again."); navigate("/admin/products"); }} />;
}

export function AdminDemo({ children, pathname = "/admin/products" }: { children: ReactNode; pathname?: string }) {
  return <AdminLayout branding={<DemoBrand />} navigation={[
    { label: "Workspace", items: [{ label: "Products", href: "/admin/products", icon: <span>▦</span>, active: pathname.startsWith("/admin/products") }, { label: "Form template", href: "/admin/products/product-1/edit", icon: <span>▤</span>, active: false }] },
    { label: "Resources", items: [{ label: "Template library", href: "/", icon: <span>◇</span> }, { label: "Login template", href: "/login", icon: <span>↗</span> }] },
  ]} renderLink={props => <DemoLink {...props} />} sidebarFooter={<><div className="demo-account"><span className="demo-avatar">AM</span><div><strong>Alex Morgan</strong><p>Demo workspace</p></div></div><p className="demo-small stark-muted">Changes reset on refresh.</p></>}
    breadcrumb={<span>Workspace <span className="demo-slash">/</span> <strong>Products</strong></span>}
    topbarActions={<><span className="demo-demo-badge">DEMO</span><span className="demo-avatar demo-avatar-small" aria-label="Alex Morgan">AM</span></>}>{children}</AdminLayout>;
}
const filters: DataTableFilter[] = [
  { columnId: "category", label: "Category", placeholder: "All categories", options: ["Accessories", "Lighting", "Homeware"].map(value => ({ label: value, value })) },
  { columnId: "status", label: "Status", placeholder: "All statuses", multiple: true, options: ["Active", "Draft", "Archived"].map(value => ({ label: value, value })) },
];
export type ListDemoState = "default" | "loading" | "empty" | "no-results" | "error";
export function ProductListDemo({ variant = "default", controlled = false }: { variant?: ListDemoState; controlled?: boolean }) {
  const { products, updateProducts, setNotice, notice } = useDemo();
  const [failed, setFailed] = useState(variant === "error");
  const [tableState, setTableState] = useState<DataTableState>({});
  const columns = useMemo<DataTableColumnDef<Product>[]>(() => [
    { accessorKey: "name", header: "Product", size: 300, minSize: 200, enableHiding: false, cell: ({ row }) => <div className="demo-product-cell"><ProductImage product={row.original} /><div><strong>{row.original.name}</strong><span className="stark-muted demo-small">{row.original.category}</span></div></div> },
    { accessorKey: "sku", header: "SKU", size: 140 },
    { accessorKey: "category", header: "Category", size: 150, filterFn: "equalsString" },
    { accessorKey: "status", header: "Status", size: 140, filterFn: (row, columnId, value: string | string[]) => Array.isArray(value) ? value.includes(row.getValue(columnId)) : row.getValue(columnId) === value, cell: ({ row }) => <Status value={row.original.status} /> },
    { accessorKey: "price", header: "Price", size: 120, cell: ({ row }) => currency(row.original.price) },
    { accessorKey: "stock", header: "Stock", size: 120, cell: ({ row }) => row.original.stock === 0 ? <span className="demo-out-of-stock">Out of stock</span> : `${row.original.stock} available` },
    { id: "details", header: "Actions", size: 132, minSize: 132, maxSize: 180, enableSorting: false, enableHiding: false, cell: ({ row }) => <TextButton asChild label="Details" intent="primary" className="stark-template-button" trailingIcon={<span aria-hidden="true">↗</span>}><DemoLink aria-label={`Details for ${row.original.name}`} href={`/admin/products/${row.original.id}`} /></TextButton> },
  ], []);
  return <ListPageTemplate title="Products" description="A considered collection, all in one place." actions={<Button asChild label="Edit a sample product" intent="primary" className="stark-template-button"><DemoLink href="/admin/products/product-1/edit" /></Button>}>
    <div className="demo-metrics" aria-label="Catalog summary">{[{ label: "Total products", value: products.length, hint: "Across your collection" }, { label: "Active products", value: products.filter(product => product.status === "Active").length, hint: "Ready for your customers" }, { label: "Drafts", value: products.filter(product => product.status === "Draft").length, hint: "A little work in progress" }].map(metric => <div key={metric.label}><p className="stark-muted">{metric.label}</p><strong>{metric.value}</strong><span className="stark-muted demo-small">{metric.hint}</span></div>)}</div>
    {notice && <p role="status" className="demo-success">{notice}</p>}
    <DataTable data={variant === "empty" ? [] : products} columns={columns} getRowId={product => product.id} caption="Products" searchLabel="Search products by name or SKU" searchPredicate={(product, query) => `${product.name} ${product.sku}`.toLowerCase().includes(query.toLowerCase())} filters={filters} enableSelection loading={variant === "loading"} error={failed ? "We couldn’t load the catalog. Please try again." : undefined} onRetry={() => setFailed(false)} initialState={variant === "no-results" ? { globalFilter: "nonexistent product" } : undefined}
      state={controlled ? tableState : undefined} onStateChange={controlled ? setTableState : undefined}
      emptyContent={<><strong>Your collection starts here.</strong><p>Add products in your application to populate this table.</p></>}
      bulkActions={(selected, clear) => <>{(["Active", "Draft"] as const).map(status => <Button key={status} className="stark-template-button" type="button" label={status === "Active" ? "Publish" : "Move to draft"} onClick={() => { updateProducts(selected.map(product => product.id), { status }); setNotice(`${selected.length} products ${status === "Active" ? "published" : "moved to draft"}.`); clear(); }} />)}</>} />
    <p className="demo-small stark-muted">Sample products · Local demo data · No changes are sent to a server</p>
  </ListPageTemplate>;
}

export function ProductNotFound() { return <PageSection title="Product not found" description="This sample product doesn’t exist."><TextButton asChild label="Back to products" intent="primary" className="stark-template-button"><DemoLink href="/admin/products" /></TextButton></PageSection>; }
export function ProductDetailsDemo({ id = "product-1", longTitle = false, missingImage = false, withoutSupporting = false }: { id?: string; longTitle?: boolean; missingImage?: boolean; withoutSupporting?: boolean }) {
  const { products, updateProducts, notice, setNotice } = useDemo();
  const product = products.find(product => product.id === id);
  if (!product) return <ProductNotFound />;
  return <DetailPageTemplate title={longTitle ? `${product.name} — a thoughtfully made everyday essential from the extended seasonal collection` : product.name} image={missingImage ? undefined : <ProductImage product={product} />} status={<Status value={product.status} />} backLink={<TextButton asChild label="← All products" intent="primary" className="stark-template-button"><DemoLink href="/admin/products" /></TextButton>} actions={<Button asChild label="Edit product" intent="primary" className="stark-template-button" trailingIcon={<span aria-hidden="true">↗</span>}><DemoLink href={`/admin/products/${id}/edit`} /></Button>}
    supportingContent={withoutSupporting ? undefined : <>
      <PageSection title="Publishing" description="Manage availability in your catalog."><Switch label="Published" checked={product.status === "Active"} onChange={event => { updateProducts([id], { status: event.target.checked ? "Active" : "Draft" }); setNotice("Publishing status updated in this demo."); }} /><p className="stark-muted">{product.status === "Active" ? "This product is visible in your catalog." : "This product is not currently published."}</p></PageSection>
      <PageSection title="Organization"><dl className="demo-definition"><div><dt>Category</dt><dd>{product.category}</dd></div><div><dt>Collection</dt><dd>Everyday essentials</dd></div></dl></PageSection>
      <PageSection title="Metadata"><dl className="demo-definition"><div><dt>Product ID</dt><dd>{product.id}</dd></div><div><dt>Created</dt><dd>October 1, 2026</dd></div><div><dt>Source</dt><dd>Sample catalog</dd></div></dl></PageSection>
    </>}>
    {notice && <p role="status" className="demo-success">{notice}</p>}
    <PageSection title="Overview" description="The essentials, at a glance."><div className="demo-overview"><div><span className="stark-muted">Price</span><strong>{currency(product.price)}</strong></div><div><span className="stark-muted">Available stock</span><strong>{product.stock} <small>units</small></strong></div><div><span className="stark-muted">Status</span><Status value={product.status} /></div></div></PageSection>
    <PageSection title="Description"><p className="demo-prose">{product.description}</p></PageSection>
    <PageSection title="Product information"><dl className="demo-definition demo-definition-horizontal"><div><dt>Product name</dt><dd>{product.name}</dd></div><div><dt>SKU</dt><dd>{product.sku}</dd></div><div><dt>Category</dt><dd>{product.category}</dd></div><div><dt>Unit price</dt><dd>{currency(product.price)}</dd></div></dl></PageSection>
    <PageSection title="Inventory" description="Availability across your demo workspace."><div className="demo-inventory"><span className="demo-avatar">▦</span><div><strong>Main warehouse</strong><p className="stark-muted">Default location</p></div><strong>{product.stock} available</strong></div><p className="stark-muted">Inventory is sample data. Connect your own inventory source through the template’s content slots.</p></PageSection>
  </DetailPageTemplate>;
}

type FormErrors = Partial<Record<"name" | "sku" | "price" | "stock", string>>;
export function ProductFormDemo({ id = "product-1", simulateFailure = false }: { id?: string; simulateFailure?: boolean }) {
  const { products, updateProducts, navigate, setNotice } = useDemo();
  const product = products.find(product => product.id === id);
  const [errors, setErrors] = useState<FormErrors>({});
  const [pending, setPending] = useState(false);
  const [failed, setFailed] = useState("");
  const [failNext, setFailNext] = useState(simulateFailure);
  const summaryRef = useRef<HTMLDivElement>(null);
  if (!product) return <ProductNotFound />;
  return <FormPageTemplate title="Edit product" description="Good details make a great product. Update yours below." backLink={<TextButton asChild label="← Back to product" intent="primary" className="stark-template-button"><DemoLink href={`/admin/products/${id}`} /></TextButton>} noValidate submitting={pending}
    feedback={<>{Object.keys(errors).length > 0 && <div role="alert" tabIndex={-1} ref={summaryRef} className="stark-error"><strong>Check the following fields</strong><ul>{Object.entries(errors).map(([field, message]) => <li key={field}><a href={`#product-${field}`} onClick={event => { event.preventDefault(); document.getElementById(`product-${field}`)?.focus(); }}>{message}</a></li>)}</ul></div>}{failed && <p role="alert" className="stark-error">{failed}</p>}</>}
    actions={<><Button className="stark-template-button" type="button" label="Cancel" disabled={pending} onClick={() => navigate(`/admin/products/${id}`)} /><Button className="stark-template-button" type="submit" label={pending ? "Saving…" : "Save changes"} intent="primary" disabled={pending} /></>}
    onSubmit={async event => {
      event.preventDefault(); if (pending) return;
      const form = new FormData(event.currentTarget);
      const name = String(form.get("name") ?? "").trim(); const sku = String(form.get("sku") ?? "").trim();
      const priceInput = String(form.get("price") ?? "").trim(); const stockInput = String(form.get("stock") ?? "").trim();
      const price = Number(priceInput); const stock = Number(stockInput);
      const next: FormErrors = {};
      if (!name) next.name = "Enter a product name.";
      if (!sku) next.sku = "Enter a SKU.";
      if (!priceInput || !Number.isFinite(price) || price < 0 || Math.abs(price * 100 - Math.round(price * 100)) > 0.00001) next.price = "Enter a price of 0 or more with up to two decimal places.";
      if (!stockInput || !Number.isSafeInteger(stock) || stock < 0) next.stock = "Enter a whole stock quantity of 0 or more.";
      setErrors(next); setFailed("");
      if (Object.keys(next).length) { requestAnimationFrame(() => summaryRef.current?.focus()); return; }
      setPending(true);
      await wait();
      if (failNext) { setFailed("Demo save failed. Your edits are still here. Please try again."); setFailNext(false); setPending(false); return; }
      updateProducts([id], { name, sku, price, stock, category: String(form.get("category")), status: String(form.get("status")) as ProductStatus, description: String(form.get("description") ?? "") });
      setNotice("Product saved. Changes are stored only for this demo session."); setPending(false); navigate(`/admin/products/${id}`);
    }}>
    <PageSection title="Product details" description="How your product appears in the catalog.">
      <Input id="product-name" label="Product name" name="name" defaultValue={product.name} error={!!errors.name} helpText={errors.name} required fullWidth />
      <Input id="product-sku" label="SKU" name="sku" defaultValue={product.sku} error={!!errors.sku} helpText={errors.sku || "Use a unique reference for your inventory."} required fullWidth />
      <Textarea label="Description" name="description" defaultValue={product.description} fullWidth optional rows={4} />
      <Dropdown label="Category" name="category" defaultValue={product.category} options={["Accessories", "Lighting", "Homeware"].map(value => ({ label: value, value }))} required clearable={false} fullWidth />
    </PageSection>
    <PageSection title="Pricing & inventory" description="Keep your price and availability up to date."><div className="demo-form-grid">
      <Input id="product-price" label="Price (USD)" name="price" type="number" min="0" step="0.01" defaultValue={product.price} error={!!errors.price} helpText={errors.price} required fullWidth />
      <Input id="product-stock" label="Available stock" name="stock" type="number" min="0" step="1" defaultValue={product.stock} error={!!errors.stock} helpText={errors.stock} required fullWidth />
    </div></PageSection>
    <PageSection title="Publishing"><Dropdown label="Status" name="status" defaultValue={product.status} options={["Active", "Draft", "Archived"].map(value => ({ label: value, value }))} required clearable={false} fullWidth /><p className="stark-muted">This demo does not publish anything to an external store.</p></PageSection>
    <Checkbox label="Simulate a save failure once" checked={failNext} onChange={event => setFailNext(event.target.checked)} />
  </FormPageTemplate>;
}

export function TemplateIndexDemo() {
  return <div className="demo-index"><DemoBrand /><header><p className="demo-eyebrow stark-muted">STARK / PAGE TEMPLATES</p><h1>A head start for<br />your next workspace.</h1><p className="stark-muted">Composable pages, thoughtful defaults, and room to make them yours.</p></header><div className="demo-index-grid">{[
    { title: "Login", number: "01", text: "A welcoming split-screen sign-in experience.", href: "/login" },
    { title: "Admin portal & list", number: "02", text: "Navigation, search, filters, and a flexible product table.", href: "/admin/products" },
    { title: "Product details", number: "03", text: "A sticky header and modular space for the details.", href: "/admin/products/product-1" },
    { title: "Edit form", number: "04", text: "Sectioned fields, validation, and clear feedback.", href: "/admin/products/product-1/edit" },
  ].map(item => <DemoLink key={item.number} className="demo-template-card" href={item.href}><span className="stark-muted">{item.number} <span>↗</span></span><h2>{item.title}</h2><p className="stark-muted">{item.text}</p></DemoLink>)}</div><p className="demo-small stark-muted">Interactive examples · Local demo data · Built with stark-lib</p></div>;
}

/** Router-free harness for Storybook and library regression fixtures. */
export function DemoApp({ initialPath = "/admin/products", listVariant, controlledTable = false, loginFailure = false }: { initialPath?: string; listVariant?: ListDemoState; controlledTable?: boolean; loginFailure?: boolean }) {
  const [path, setPath] = useState(initialPath);
  const id = path.split("/")[3];
  return <DemoProvider navigate={next => { setPath(next); window.scrollTo(0, 0); }}>
    {path === "/" ? <TemplateIndexDemo /> : path === "/login" ? <LoginDemo failure={loginFailure} /> : <AdminDemo pathname={path}>
      {path.endsWith("/edit") ? <ProductFormDemo key={id} id={id} /> : id ? <ProductDetailsDemo id={id} /> : <ProductListDemo variant={listVariant} controlled={controlledTable} />}
    </AdminDemo>}
  </DemoProvider>;
}
