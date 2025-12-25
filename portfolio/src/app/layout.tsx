import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructureData";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kyaw Thet Htwe | Fullstack Developer | Next.js & TypeScript",
  description: "Portfolio of Kyaw Thet Htwe, a Fullstack Developer specializing in Next.js, React, Node.js, and TypeScript. View projects and experience.",
  keywords: ["Fullstack Developer", "Next.js", "Node.js", "TypeScript", "React", "Web Development", "Portfolio", "Kyaw Thet Htwe"],
  authors: [{ name: "Kyaw Thet Htwe" }],
  creator: "Kyaw Thet Htwe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kyawthethtwe.me/",
    title: "Kyaw Thet Htwe | Fullstack Developer",
    description: "Fullstack Developer specializing in Next.js, Node.js, and TypeScript. View my projects and experience.",
    siteName: "Kyaw Thet Htwe Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this image in your public folder
        width: 1200,
        height: 630,
        alt: "Kyaw Thet Htwe - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyaw Thet Htwe | Fullstack Developer",
    description: "Fullstack Developer specializing in Next.js, Node.js, and TypeScript. View my projects and experience.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
