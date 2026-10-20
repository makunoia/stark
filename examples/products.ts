export type ProductStatus = "Active" | "Draft" | "Archived";
export interface Product {
  id: string; name: string; sku: string; category: string; status: ProductStatus;
  price: number; stock: number; description: string; image?: string;
}

// Bundled SVG thumbnails: no external requests or image service dependency.
function thumbnail(color: string, shape: "bag" | "lamp" | "cup") {
  const object = shape === "bag" ? '<path d="M29 38h62l-5 59H34z" fill="#fff"/><path d="M44 43V33a16 16 0 0 1 32 0v10" fill="none" stroke="#51446c" stroke-width="5"/>' : shape === "lamp" ? '<path d="M42 23h36l17 42H25z" fill="#fff"/><path d="M60 65v28M43 95h34" stroke="#51446c" stroke-width="5" stroke-linecap="round"/>' : '<rect x="30" y="32" width="54" height="59" rx="12" fill="#fff"/><path d="M84 43h8a14 14 0 0 1 0 28h-8" fill="none" stroke="#fff" stroke-width="7"/>';
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect width="120" height="120" rx="18" fill="${color}"/>${object}</svg>`)}`;
}
const names = ["Everyday canvas tote", "Arc table lamp", "Studio ceramic mug", "Weekend carryall", "Dune reading light", "Morning coffee cup", "Market shoulder bag", "Halo desk lamp", "Pebble espresso cup", "Utility canvas bag", "Nord bedside light", "Field stoneware mug", "Daytrip cotton tote", "Orbit task lamp", "Cloud tea cup", "Pocket shopper", "Linen shade lamp", "Ridge ceramic mug", "Essential carry tote", "Form table light", "Glaze breakfast cup", "Sunday canvas bag", "Beam reading lamp", "Sand coffee mug", "Daily shoulder tote", "Loop desk light", "Clay espresso cup", "Transit carryall", "Sol table lamp", "Ripple tea mug"];
export const productFixtures: Product[] = names.map((name, i) => ({
  id: `product-${i + 1}`, name, sku: `STK-${String(i + 1).padStart(4, "0")}`,
  category: ["Accessories", "Lighting", "Homeware"][i % 3],
  status: i % 7 === 0 ? "Draft" : i % 11 === 0 ? "Archived" : "Active",
  price: [38, 129, 24][i % 3] + Math.floor(i / 3) * 2, stock: i % 8 === 0 ? 0 : 12 + i * 3,
  description: "Designed for everyday rituals. Made with considered materials and a simple, lasting silhouette. A versatile addition to the Stark collection, ready for workdays and slower weekends alike.",
  image: thumbnail(["#ddd7ec", "#e7dccd", "#d9e6df"][i % 3], ["bag", "lamp", "cup"][i % 3] as "bag" | "lamp" | "cup"),
}));
export const currency = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
