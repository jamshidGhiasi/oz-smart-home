/* eslint-disable react/no-unescaped-entities */
import { OSHCopy } from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import type { Metadata } from 'next'
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import Link from 'next/link'

import { getMarkdownPage } from '@/utils/markdown'
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv, Star, Cog } from 'lucide-react'
import CallToAction from "@/components/shared/content/call-to-action";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: 'About Us - Elevating Your Living Experience | Oz Smart Home',
  description: `Learn about Oz Smart Home’s commitment to innovative home automation. Discover our mission, expertise, and how we can enhance your living space.`,
  alternates: {
    canonical: 'https://www.ozsmarthome.com.au/about'
  }
}
const AboutPage = async () => {
  const page = await getMarkdownPage('about');
  if (!page) {
    return notFound();
  }
  return (
    <>
      <ContentWrapper className="relative  bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
        <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
          <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>{page.title}</span></h1>
          <span className="mb-4 block text-md font-rhd">{page.subtitle}</span>
          <div dangerouslySetInnerHTML={{ __html: page.content as string }} />
          <div className=" flex flex-col">
            <Link href={'/services'} className="underline font-bold  mt-2 mb-4" ><Cog className="inline-block mr-2" />View our Services</Link>
            <Link href={'/reviews'} className="underline font-bold " ><Star className="inline-block mr-2" />See what clients have to say about us</Link>
          </div>

        </div>
        <div className=" top-0 right-0 w-full h-full overflow-hidden absolute bottom-0">
          <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
            <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
          </div>
        </div>
      </ContentWrapper>
      <CallToAction />
    </>
  );
}
export default AboutPage;