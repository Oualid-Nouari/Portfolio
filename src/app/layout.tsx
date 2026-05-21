import type { Metadata } from "next";
import { Inter, Syne, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Oualid Nouari",
  description: "Premium interactive portfolio for an Odoo developer.",
  icons: {
    icon: "/images/g_can.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${outfit.variable} h-full antialiased bg-background text-foreground`}>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
