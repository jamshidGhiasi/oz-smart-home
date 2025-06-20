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
import SmartHomeChatFAB from '@/components/chat/smarthome-chat-fab';


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oz Smart Home',
  logo: 'https://www.ozsmarthome.com.au/oz-smart-home-icon.svg',
  sameAs: [
    'https://www.youtube.com/channel/UC_tHsMQBR9da556Wh4vUW6w',
    'https://www.instagram.com/ozsmarthome/',
    'https://www.facebook.com/profile.php?id=61556389307850'

  ],
  url: "https://www.ozsmarthome.com.au/",
  "foundingDate": "2020-01-01",
  "foundingLocation": "Sydney, Australia",
  "areaServed": "AU",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-1800-865-070",
    "contactType": "Customer Service",
    "areaServed": "AU",
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2075",
    "addressCountry": "AU"
  }
}

const breadcrumbJson = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ozsmarthome.com.au/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.ozsmarthome.com.au/about" },
    { "@type": "ListItem", "position": 3, "name": "Projects", "item": "https://www.ozsmarthome.com.au/projects" },
    { "@type": "ListItem", "position": 4, "name": "Services", "item": "https://www.ozsmarthome.com.au/services" },
    { "@type": "ListItem", "position": 5, "name": "Smart Lighting", "item": "https://www.ozsmarthome.com.au/services/smart-lighting" },
    { "@type": "ListItem", "position": 6, "name": "Smart Blinds & Curtains", "item": "https://www.ozsmarthome.com.au/services/smart-blinds-and-curtains" },
    { "@type": "ListItem", "position": 7, "name": "Smart Air Conditioning", "item": "https://www.ozsmarthome.com.au/services/smart-air-conditioning" },
    { "@type": "ListItem", "position": 8, "name": "Access & Intercom", "item": "https://www.ozsmarthome.com.au/services/smart-access-and-intercom" },
    { "@type": "ListItem", "position": 9, "name": "CCTV, Security & Alarm", "item": "https://www.ozsmarthome.com.au/services/cctv-security-and-alarm" },
    { "@type": "ListItem", "position": 10, "name": "Entertainment & AV", "item": "https://www.ozsmarthome.com.au/services/entertainment-and-av" },
    { "@type": "ListItem", "position": 11, "name": "Network", "item": "https://www.ozsmarthome.com.au/services/network" },
    { "@type": "ListItem", "position": 12, "name": "Home Automation", "item": "https://www.ozsmarthome.com.au/services/home-automation" },
    { "@type": "ListItem", "position": 13, "name": "Contact", "item": "https://www.ozsmarthome.com.au/contact" },
    { "@type": "ListItem", "position": 14, "name": "Knowledge Hub", "item": "https://www.ozsmarthome.com.au/knowledge-hub" },
    { "@type": "ListItem", "position": 15, "name": "Reviews", "item": "https://www.ozsmarthome.com.au/reviews" }
  ]
};


const red_hat_display = Red_Hat_Display({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-rhd',
})
export const metadata: Metadata = {
  title: 'Pioneering Smart Living Solutions | OZ SMART HOME',
  description: 'Elevate your lifestyle with our smart home solutions - convenience, security, privacy and energy efficiency at your fingertips.',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbJson]) }}
        />

        <meta name="google-site-verification" content="Ck6elDb-LnhUPytJy_BFvOjyUdAEYgH7cdTisovwnHs" />
      </head>
      <body
        className={cn(
          " bg-background font-sans antialiased  bg-[#171718]",
          red_hat_display.variable
        )}
      >
        <GoogleTagManager gtmId="GTM-TQSQ4PBN" />
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
        {/* <SmartHomeChatFAB /> */}
      </body>
    </html>
  )
}
