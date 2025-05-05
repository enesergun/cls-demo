// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "CLS Demo",
  description: "Cumulative Layout Shift Demo App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Orbitron, sans-serif" }}>
        <main className="p-8 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
