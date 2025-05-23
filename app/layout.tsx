import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import { OlympicSans } from "@/app/ui/fonts";
import UserBanner from "@/app/ui/components/user-banner";
import NavTop from "@/app/ui/components/nav-top";
import Footer from "@/app/ui/components/footer";
//import { EventsProvider } from "@/app/lib/context/cartContext";
//import { CartContext } from "@/app/lib/context/cartContextStore";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/*<EventsProvider>*/}
        {/*<CartContext>*/}
          <UserBanner />
          <NavTop />
          {children}
          <Footer/>
        {/*</CartContext>*/}
        {/*</EventsProvider>*/}
        
      </body>
    </html>
  );
}
