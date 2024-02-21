import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Red_Hat_Display } from 'next/font/google'
import HeaderDesktop from '@/components/shared/navigation/header-desktop'
import HeaderMobile from '@/components/shared/navigation/header-mobile'
import SideNav from '@/components/shared/navigation/side-nav'
import MarginWidthWrapper from '@/components/shared/layout/margin-width-wrapper'
import PageWrapper from '@/components/shared/layout/page-wrapper'



const red_hat_display = Red_Hat_Display({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-rhd',
})

export const metadata: Metadata = {
  title: 'Pioneering Smart Living Solutions | OZ SMART HOME',
  description: 'Elevate your lifestyle with our smart home solutions – convenience, security, privacy and energy efficiency at your fingertips.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta property="og:url" content="ozsmarthome.com.au" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OZ SMART HOME" />
        <meta property="og:description" content="Elevate your lifestyle with our smart home solutions - convenience, security, and energy efficiency at your fingertips." />
        <meta property="og:image" content="https://ozsmarthome.com.au/opengraph-image.jpg" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased  bg-[#09090b]",
          red_hat_display.variable
        )}
      >
        
                  <div className="flex">
          <SideNav />
          <main className="flex-1">
            <MarginWidthWrapper>
              {/* <HeaderDesktop /> */}
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
    
      </body>
    </html>
  )
}
