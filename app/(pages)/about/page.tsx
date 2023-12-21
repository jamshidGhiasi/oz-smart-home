import ContentWrapper from "@/components/shared/layout/content-wrapper";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - OZ SMART HOME | Pioneering Smart Home and Automation Solutions',
  description: `Discover the vision behind OZ SMART HOME - Your trusted partner in smart home and automation solutions. Learn about our passion for innovation, commitment to quality, and how we're shaping the future of intelligent living. Join us on the journey to redefine home experiences.`,
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