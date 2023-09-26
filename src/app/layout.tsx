import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
import clsx from "clsx";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Felipe Hidalgo",
  description: "Hoja de Vida",
};
config.autoAddCss = false;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={clsx(inter.className)}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
