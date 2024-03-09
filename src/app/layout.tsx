import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Inspiraspace",
  description: "Inspiraspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <link rel="icon" href="/icon.png" sizes="any" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
