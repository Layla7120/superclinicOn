import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main Page",
  description: "Main page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body>{children}</body>
    </html>
  );
}
