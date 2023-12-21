import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Smart Home Services by OZ SMART HOME | Lighting, Blinds, Security, and More',
  description: 'Explore cutting-edge smart home services at OZ SMART HOME. Elevate your living experience with intelligent solutions, including smart lighting, automated blinds, climate control, secure door locks, intercom systems, garage and gate automation, security cameras, and more. Discover how our services can transform your home into a connected haven.',

}

const ServicesPage = async () => {
    return (
        <main className="">
        <ContentWrapper className=' w-full px-2 lg:max-w-6xl mx-auto border'>
          SERVICES PAGE
        </ContentWrapper>
      </main>
    );
}

export default ServicesPage;