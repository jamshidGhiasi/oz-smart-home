import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services - Smart Home Solutions by Oz Smart Home',
  description: `Explore Oz Smart Home's range of services for smart living. From security systems to energy efficiency solutions, we enhance your home with innovation.`,

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