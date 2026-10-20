"use client";
import { usePathname } from "next/navigation";
import { AdminDemo } from "../../../../../examples/ProductDemo";
export default function Admin({ children }: { children: React.ReactNode }) { return <AdminDemo pathname={usePathname()}>{children}</AdminDemo>; }
