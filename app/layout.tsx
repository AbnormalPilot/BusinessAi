import type { Metadata } from 'next'
import { Outfit, Manrope } from 'next/font/google'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const kingdrops = localFont({
  src: './fonts/KingdropsScript-Regular.ttf',
  variable: '--font-kingdrops',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BusinessAi - AI Business Brain for MSMEs | Google Hackathon',
  description: 'BusinessAi is an all-in-one AI system for MSMEs that handles billing, inventory, finance tracking, and business growth. Works in Hindi & English with voice commands.',
  generator: 'Next.js',
  // ... rest of metadata
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${manrope.variable} ${kingdrops.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
        <Script src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js" type="module" strategy="afterInteractive" />
      </body>
    </html>
  )
}
