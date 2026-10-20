"use client";
import { use } from "react";
import { ProductFormDemo } from "../../../../../../../../examples/ProductDemo";
export default function ProductEdit({ params }: { params: Promise<{ id: string }> }) { const { id } = use(params); return <ProductFormDemo key={id} id={id} />; }
