import type { Metadata } from "next";
import { Quicksand, Lato } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Little Sprout - Melbourne's Sustainable Wooden Toy Rental Service",
  description: "Play today. Protect tomorrow. Curated wooden toys delivered to your door, rotated bi-monthly. Less clutter. More joy. Join Melbourne families choosing sustainable play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} ${lato.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
