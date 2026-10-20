import React from "react";
import { AdminDemo, DemoApp, DemoProvider, ProductDetailsDemo, type ListDemoState } from "../../examples/ProductDemo";
export function TemplatesFixture() {
  const params = new URLSearchParams(location.search);
  if (params.has("edge")) return <DemoProvider navigate={() => {}}><AdminDemo><ProductDetailsDemo longTitle missingImage withoutSupporting={params.get("edge") === "single"} /></AdminDemo></DemoProvider>;
  return <DemoApp initialPath={params.get("path") || "/admin/products"} listVariant={(params.get("variant") || "default") as ListDemoState} controlledTable={params.has("controlled")} loginFailure={params.has("loginFailure")} />;
}
