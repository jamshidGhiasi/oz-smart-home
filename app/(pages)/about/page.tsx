/* eslint-disable react/no-unescaped-entities */
import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import type { Metadata } from 'next'
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import Link from 'next/link'
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About <OSHCopy /> - Elevating Your Living Experience',
  description: `Learn about <OSHCopy /> - pioneers in smart living solutions. Discover how we combine security, privacy, and energy efficiency to enhance your lifestyle.`,
}
const AboutPage = async () => {
  return (
    <div>

    <ContentWrapper className='   relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-24  overflow-hidden'>

      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>About us</span></h1>
        <span className="mb-4 block text-md font-rhd">Discover Our Story</span>
        <p className="text-[hsl(240,5%,74.9%)]">
          At <OSHCopy />, we are committed to redefining the landscape of smart living solutions. Established in 2020, we've quickly emerged as industry leaders, driven by a passion for innovation, security, and efficiency. Our mission is simple: to provide cutting-edge smart home solutions that prioritize security, privacy, and energy efficiency, all while offering competitive pricing and unmatched flexibility.
        </p>
        <p className="text-[hsl(240,5%,74.9%)]">
          Unlike other smart home providers, we understand that one size does not fit all. That's why we pride ourselves on our flexibility in tailoring solutions to meet the unique needs of each client. Whether you're building a new home or retrofitting an existing one, our expert team will work closely with you to design and implement a solution that seamlessly integrates into your lifestyle and budget.
        </p>
        <p className="text-[hsl(240,5%,74.9%)]">
          One key aspect that sets us apart is our commitment to diversity and compatibility. Our range of smart devices and solutions are not bound to a single brand, providing you with a wider selection and eliminating the hassle of dealing with multiple vendors. This not only ensures greater flexibility in customization but also simplifies troubleshooting and after-sales support, ultimately saving you time and money. With <OSHCopy />, you can trust that your smart living experience will be hassle-free, efficient, and cost-effective.
        </p>

      </div>
      <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
        <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
      </div>
    </ContentWrapper>
    <ContentWrapper className=' bg-[#f5f6f7] mx-4 my-4 py-12 lg:py-24 '>
        <div className=' text-black    '>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 mt-0 text-center'> Feeling Ready<span className='sub-heading'>to elevate your home and lifestyle? </span></h2>
        </div>
        <div className='mx-auto flex flex-col items-center  '>
          <p className='text-center font-b'>Contact us today for a free and obligation-free consultation tailored to your needs.</p>
          <div className='mt-3 mb-1'>
            <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 rounded-xl mr-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#fff] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Get started today</Link>
            <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 rounded-xl bg-black text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'/contact'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>

          </div>
          <small className='block text-center'>You can also book a time to visit our Smart Showroom.</small>
        </div>
      </ContentWrapper>
    </div>
  );
}
export default AboutPage;