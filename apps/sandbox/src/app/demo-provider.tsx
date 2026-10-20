"use client";
import { useRouter } from "next/navigation";
import { DemoProvider } from "../../../../examples/ProductDemo";
export function SandboxDemoProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return <DemoProvider navigate={href => router.push(href)}>{children}</DemoProvider>;
}
