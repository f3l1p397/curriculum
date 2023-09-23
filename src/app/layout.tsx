import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bulma/css/bulma.css";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Felipe Hidalgo",
  description: "Hoja de Vida",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
