import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sandbox App",
  description: "A webpage to test my components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-screen flex justify-center items-center"
      >
        {children}
      </body>
    </html>
  );
}
