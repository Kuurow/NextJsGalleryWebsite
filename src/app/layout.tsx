import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Next.js image gallery",
  description: "LEZGO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-zinc-900 to-stone-800">
        <Header />
        <main className="max-w-8xl mx-auto pt-20">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
