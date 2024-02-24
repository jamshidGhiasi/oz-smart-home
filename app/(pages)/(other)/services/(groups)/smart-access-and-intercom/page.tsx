import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services - Smart Access and Intercom Solutions by Oz Smart Home',
  description: `Explore Oz Smart Home's range of services for smart living. From security systems to energy efficiency solutions, we enhance your home with innovation.`,

}

const SmartAccessAndIntercomPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Access & Intercom</span></h1>
        <span className="mb-4 block text-md font-rhd">Know more about smart access and intercom solutions</span>
      </div>
    </ContentWrapper>
  );
}

export default SmartAccessAndIntercomPage;