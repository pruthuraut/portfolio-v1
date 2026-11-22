import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Satoshi — display/body face used by the Athos reference
const sans = localFont({
  src: [
    { path: "./fonts/Satoshi-300.woff2", weight: "300" },
    { path: "./fonts/Satoshi-400.woff2", weight: "400" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700" },
    { path: "./fonts/Satoshi-900.woff2", weight: "900" },
  ],
  variable: "--font-sans",
  display: "swap",
})

// Space Mono — label/mono face used by the Shutter reference
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" })

export const metadata: Metadata = {
  title: "Pruthu Raut — Offensive & AI Security Researcher",
  description:
    "Pruthu Raut breaks systems for fun and profit: AI/LLM security, exploit development and bug bounty. Credited by NASA, Apple, WHO, BBC and more.",
}

export const viewport: Viewport = { themeColor: "#040404", colorScheme: "dark" }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
