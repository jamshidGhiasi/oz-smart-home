import type { Metadata } from 'next'
import './globals.css'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Red_Hat_Display } from 'next/font/google'
import HeaderMobile from '@/components/shared/navigation/header-mobile'
import SideNav from '@/components/shared/navigation/top-nav'
import MarginWidthWrapper from '@/components/shared/layout/margin-width-wrapper'
import PageWrapper from '@/components/shared/layout/page-wrapper'
import TopNav from '@/components/shared/navigation/top-nav'
import Footer from '@/components/shared/layout/footer'
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oz Smart Home',
  logo: 'https://www.ozsmarthome.com.au/oz-smart-home-icon.svg',
  sameAs: [
    'https://www.youtube.com/channel/UCcbxjhRbel_JTpAiwMiznvQ',
    'https://www.instagram.com/ozsmarthome/',
    'https://www.facebook.com/profile.php?id=61556389307850'

  ],
  url:"https://www.ozsmarthome.com.au/"
}


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
        <meta property="og:title" content="Smart Home Solutions | Oz Smart Home" />
        <meta property="og:description" content="Explore innovative smart home solutions at Oz Smart Home. Enhance your lifestyle today with tailored automation and security services." />
        <meta property="og:image" content="https://ozsmarthome.com.au/opengraph-image.jpg" />
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <meta name="google-site-verification" content="Ck6elDb-LnhUPytJy_BFvOjyUdAEYgH7cdTisovwnHs" />
      </head>
      <body
        className={cn(
          " bg-background font-sans antialiased  bg-[#171718]",
          red_hat_display.variable
        )}
      >
    <GoogleTagManager gtmId="GTM-WN5KNKD5" />
     <GoogleAnalytics gaId="G-L9580VK4FJ" />
          <main className="">
            <TopNav />
            <MarginWidthWrapper>
        
              <HeaderMobile />
              <PageWrapper>{children}</PageWrapper>
            </MarginWidthWrapper>
            <Footer />
          </main>
        <Toaster />
      </body>
    </html>
  )
}
