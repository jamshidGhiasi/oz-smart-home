/* eslint-disable react/no-unescaped-entities */

import { OSHCopy } from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { getMarkdownPage } from "@/utils/markdown";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Efficient Smart Air Conditioning | Oz Smart Home',
  description: `Experience efficient and customised cooling tailored to your needs. Upgrade to smart air conditioning with Oz Smart Home. Get in touch today.`,

}

const SmartAirConditioningPage = async () => {
  const page = await getMarkdownPage('services/smart-air-conditioning');
  if (!page) {
    return notFound();
  }
  return (
    <>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>{page.title}</span></h1>
        <span className="mb-4 block text-md font-rhd">{page.subtitle}</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto ">

        <div dangerouslySetInnerHTML={{ __html: page.content as string }} />

        <ServicesNavigation nextService="smart-access-and-intercom" />
      </div>
    </>
  );
}

export default SmartAirConditioningPage;