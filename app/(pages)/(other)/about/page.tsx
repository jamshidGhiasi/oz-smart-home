/* eslint-disable react/no-unescaped-entities */
import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import type { Metadata } from 'next'
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import Link from 'next/link'
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv } from 'lucide-react'
import CallToAction from "@/components/shared/content/call-to-action";
export const metadata: Metadata = {
  title: 'About Os Smart Home - Elevating Your Living Experience',
  description: `Learn about  Oz Smart Home - pioneers in smart living solutions. Discover how we combine security, privacy, and energy efficiency to enhance your lifestyle.`,
}
const AboutPage = async () => {
  return (
    <>
    <ContentWrapper className="relative  bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>About us</span></h1>
        <span className="mb-4 block text-md font-rhd">Discover Our Story</span>
        <p className="text-[hsl(240,5%,74.9%)]">
          At <OSHCopy />, we are committed to redefining the landscape of smart living solutions. Established in 2020, we've quickly emerged as industry leaders, driven by a passion for innovation, security, and efficiency. Our mission is simple: to provide cutting-edge <Link href={'/services'} className="underline font-bold" >smart home solutions</Link> that prioritize security, privacy, and energy efficiency, all while offering competitive pricing and unmatched flexibility.
        </p>
        <p className="text-[hsl(240,5%,74.9%)]">
          Unlike other smart home providers, we understand that one size does not fit all. That's why we pride ourselves on our flexibility in tailoring <Link href={'/services'} className="underline font-bold" >solutions</Link> to meet the unique needs of each client. Whether you're building a new home or retrofitting an existing one, our expert team will work closely with you to design and implement a solution that seamlessly integrates into your lifestyle and budget.
        </p>
        <p className="text-[hsl(240,5%,74.9%)]">
          One key aspect that sets us apart is our commitment to diversity and compatibility, <Link href={'/reviews'} className="underline font-bold" >see what customers day about us</Link>. Our range of smart devices and solutions are not bound to a single brand, providing you with a wider selection and eliminating the hassle of dealing with multiple vendors. This not only ensures greater flexibility in customization but also simplifies troubleshooting and after-sales support, ultimately saving you time and money. With <OSHCopy />, you can trust that your smart living experience will be hassle-free, efficient, and cost-effective.
        </p>
      </div>
      <div className=" top-0 right-0 w-full h-full overflow-hidden absolute bottom-0">
        <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
          <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
        </div>
      </div>
      </ContentWrapper>
      <CallToAction/>
    </>
  );
}
export default AboutPage;