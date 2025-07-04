/* eslint-disable react/no-unescaped-entities */

import { OSHCopy } from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { getMarkdownPage } from "@/utils/markdown";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Secure Smart Access Solutions | Sydney | Oz Smart Home',
  description: `Discover secure and modern smart access solutions that let you see, speak to, and unlock your doors remotely. Explore intercom and access control with full home automation.`,
  alternates: {
    canonical: "https://www.ozsmarthome.com.au/services/smart-access-and-intercom"
  }

}

const SmartAccessAndIntercomPage = async () => {

  const page = await getMarkdownPage('services/smart-access-and-intercom');

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
        <p><Link className=" font-bold underline" href={'/contact'}>Request a Free Quote</Link> or See It in Action now to experience modern home access done right.</p>

        <ServicesNavigation nextService="cctv-security-and-alarm" />

      </div>
    </>
  );
}

export default SmartAccessAndIntercomPage;