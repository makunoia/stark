import type { Metadata } from "next";
import { SandboxDemoProvider } from "./demo-provider";
import "./globals.css";
export const metadata: Metadata = { title: "Stark · Page templates", description: "Composable page templates built with Stark UI" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SandboxDemoProvider>{children}</SandboxDemoProvider></body></html>;
}
