import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FilterGameContextProvider } from "@/context/filterGameContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Play Games - Play Free Games in Seconds by Open Play Studio",
  description: "Play free game in seconds. No login required just for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="BaZI1dEoU-chgF1oO_CktflBxhmfCnUEsop82e3DkL8" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen min-h-screen`}
      >
        <Header />
        <FilterGameContextProvider>
        {children}
        </FilterGameContextProvider>
        <Footer />
      </body>
    </html>
  );
}
