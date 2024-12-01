import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="bg-custom m-0 p-0 bg-center md:bg-fit">
      <body className="">
        <main className="max-w-8xl mx-auto pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
