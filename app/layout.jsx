import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  title: "MHA | Software Engineer",
  description:
    "Software Engineer specializing in Next.js, Django, Node.js & MERN Stack.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Django",
    "Node.js",
    "MERN Stack",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Hashir Abdullah" }],
  openGraph: {
    type: "website",
    title: "Muhammad Hashir Abdullah | Portfolio",
    description:
      "Software Engineer specializing in Next.js, Django, Node.js & MERN Stack.",
    siteName: "Muhammad Hashir Abdullah Portfolio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-display bg-[#0f1623] text-slate-100 antialiased`}
      >
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
