import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Tomás Medina",
  description: "Generated by create Juan Segundo Martínez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="./icon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="text-white w-full max-w-[1350px] mx-auto">
        <Header />
        <main className="flex w-full flex-col items-center justify-between text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
