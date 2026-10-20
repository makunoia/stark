"use client";
import { use } from "react";
import { ProductDetailsDemo } from "../../../../../../../examples/ProductDemo";
export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) { const { id } = use(params); return <ProductDetailsDemo id={id} />; }
