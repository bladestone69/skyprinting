import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sky Printing | Custom Phone Covers & Expert Repairs",
  description: "Custom phone covers with your design, plus expert repairs by a 25-year mobile technician. WhatsApp Jos for quick answers on repairs, printed covers, screen protectors, and accessories.",
  keywords: ["phone repairs", "custom phone covers", "screen protectors", "mobile technician", "South Africa"],
  openGraph: {
    title: "Sky Printing | Custom Covers + Repairs",
    description: "Custom printing and trusted repairs for phones and tablets. Your design, our expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} min-h-full antialiased bg-[oklch(0.12_0.015_240)]`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
