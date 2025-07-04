/* eslint-disable react/no-unescaped-entities */

import { OSHCopy } from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { PhoneOutgoing, Send } from "lucide-react";
import { Metadata } from "next";
import { getMarkdownPage } from "@/utils/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: 'Smart Lighting Services | Oz Smart Home',
  description: `Illuminate your home with Oz Smart Home's smart lighting. Control ambiance and energy use effortlessly. Discover your options now.`,
  alternates: {
    canonical: "	https://www.ozsmarthome.com.au/services/smart-lighting"
  }

}
const SmartLightingPage = async () => {
  const page = await getMarkdownPage('services/smart-lighting');
  if (!page) {
    return notFound();
  }
  return (
    <>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>{page.title}</span></h1>
        <span className="mb-4 block text-md font-rhd">{page.subtitle}</span>
        <p className="text-white">{page.intro}</p>
        <p className="text-white">{page.introAction}</p>
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 font-bold rounded-xl mt-4 bg-[hsl(240,3.7%,15.9%)] text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto ">
        <div dangerouslySetInnerHTML={{ __html: page.content as string }} />
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 font-bold rounded-xl mt-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Contact us</Link>
        <ServicesNavigation nextService="smart-blinds-and-curtains" />
      </div>
    </>
  );
}
export default SmartLightingPage;