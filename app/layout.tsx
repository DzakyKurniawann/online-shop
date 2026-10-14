import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: {
    default: "Online Shop — Your Trusted E-Commerce Store",
    template: "%s | Online Shop",
  },
  description: "Shop high-quality products at the best prices with exclusive deals and fast shipping only at Online Shop.",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
