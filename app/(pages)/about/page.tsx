import ContentWrapper from "@/components/shared/layout/content-wrapper";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Oz Smart Home - Elevating Your Living Experience',
  description: `Learn about Oz Smart Home - pioneers in smart living solutions. Discover how we combine security, privacy, and energy efficiency to enhance your lifestyle.`,
}

const AboutPage = async () => {
    return (
        <main className="">
        <ContentWrapper className=' w-full px-2 lg:max-w-6xl mx-auto border'>
          ABOUT PAGE
        </ContentWrapper>
      </main>
    );
}

export default AboutPage;