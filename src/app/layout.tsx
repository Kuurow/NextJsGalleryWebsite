import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kuu's image gallery",
  description: "POGGU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="bg-zinc-900">
        <Header />
        <main className="max-w-8xl mx-auto pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
