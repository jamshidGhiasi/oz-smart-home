import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services - Smart Air Conditioning Solutions by Oz Smart Home',
  description: `Explore Oz Smart Home's range of services for smart living. From security systems to energy efficiency solutions, we enhance your home with innovation.`,

}

const SmartAirConditioningPage = async () => {
  return (
    <ContentWrapper className='px-2  mx-auto  relative flex items-center justify-center h-full z-20'>
      <div className='w-full sm:w-full md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12 p-4 lg:p-0 text-white '>
        <h1 className='text-lg lg:text-2xl mb-4'> <OSHCopy /><span className='sub-heading'>Pioneering Smart Living Solutions</span></h1>
        <p className='text-md lg:text-lg'>Welcome to <OSHCopy />, where we redefine smart living with a focus on security, privacy, and energy efficiency. Our integrated solutions cover it all: from smart lighting and blinds to advanced air conditioning, intercom, locks, CCTV, security cameras, alarms and many more. With our state-of-the-art technology, your home is protected inside and out. Experience peace of mind and comfort with <OSHCopy />.</p>
      </div>
    </ContentWrapper>
  );
}

export default SmartAirConditioningPage;