import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AdminDemo, DemoApp, DemoProvider, ProductDetailsDemo, ProductFormDemo } from "../../../examples/ProductDemo";

const meta = {
  title: "Templates/Pages",
  component: DemoApp,
  parameters: { layout: "fullscreen", docs: { description: { component: "Reusable templates exported by stark-lib. These examples compose them with fictional products and in-memory state. Integrate your own routing, authentication, and persistence through slots and callbacks. Column widths and visibility stay in memory; resize with handles or the numeric inputs in Columns." } } },
  args: { initialPath: "/admin/products" },
} satisfies Meta<typeof DemoApp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const ProductList: Story = {};
export const ControlledTable: Story = { args: { controlledTable: true }, parameters: { docs: { description: { story: "The parent supplies state and onStateChange. Each callback receives the next complete state, allowing application-owned table preferences." } } } };
export const Login: Story = { args: { initialPath: "/login" } };
export const LoginFailure: Story = { args: { initialPath: "/login", loginFailure: true } };
export const ProductDetails: Story = { args: { initialPath: "/admin/products/product-1" } };
export const EditForm: Story = { args: { initialPath: "/admin/products/product-1/edit" } };
export const Loading: Story = { args: { listVariant: "loading" } };
export const EmptyCatalog: Story = { args: { listVariant: "empty" } };
export const NoResults: Story = { args: { listVariant: "no-results" } };
export const LoadError: Story = { args: { listVariant: "error" } };
export const UnknownProduct: Story = { args: { initialPath: "/admin/products/missing" } };
export const DetailLongTitle: Story = { render: () => <DemoProvider navigate={() => {}}><AdminDemo><ProductDetailsDemo longTitle missingImage /></AdminDemo></DemoProvider> };
export const DetailWithoutSidebar: Story = { render: () => <DemoProvider navigate={() => {}}><AdminDemo><ProductDetailsDemo withoutSupporting /></AdminDemo></DemoProvider> };
export const SaveFailure: Story = { render: () => <DemoProvider navigate={() => {}}><AdminDemo><ProductFormDemo simulateFailure /></AdminDemo></DemoProvider> };
