import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UBER və Yango Sürücü Qeydiyyat Mərkəzi",
  description: "UBER və Yango Sürücü Qeydiyyat Mərkəzi",
  icons: {
    icon: './fav.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
