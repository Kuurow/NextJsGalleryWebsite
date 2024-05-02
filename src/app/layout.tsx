import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

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
    <html lang="en">
      <body className="bg-stone-800">
        <Header />
        <main className="max-w-8xl mx-auto pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
