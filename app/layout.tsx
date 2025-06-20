import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OlympicSansReg } from "./ui/fonts";
import "./globals.css";
import UserBanner from "@/app/ui/components/user-banner";
import NavTop from "@/app/ui/components/nav-top";
import Footer from "@/app/ui/components/footer";
import { CartProvider } from "@/app/lib/context/cartContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paris 2024 Summer Olympics - Athletes, Medals, Events & Results",
  description: "Not Official e-tickets booking for Paris 2024 Olympics Games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${OlympicSansReg.className} antialiased`}>
        <CartProvider>
          <UserBanner />
          <NavTop />
          {children}
          <Footer/>
        </CartProvider>
        
      </body>
    </html>
  );
}
