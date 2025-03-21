
import { OSHCopy } from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";
import Image from "next/image";
import pic from '@/public/bg-test-1.jpg'
import ProfileForm from "@/components/shared/content/contact-form";
import { Icon } from '@iconify/react';
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv, Info } from 'lucide-react'
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Contact for Smart Solutions | Oz Smart Home',
  description: 'Get in touch with Oz Smart Home for expert advice on home automation. Call, email, or use our contact form to discuss your smart home needs.',
  alternates: {
    canonical: 'https://www.ozsmarthome.com.au/contact'
  }
}
const ContactPage = async () => {
  return (
    <>
      <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
        <div className=" flex items-center justify-center relative z-20">
          <div className="w-full max-w-4xl  overflow-hidden md:flex">
            <div className="w-full md:w-1/2 ">
              <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
                <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Contact</span></h1>
                <span className="mb-4 block text-md font-rhd">See how we can help you</span>
              </div>
              <div className="relative  z-20 text-lg w-full max-w-4xl mx-auto">
                <ProfileForm />
              </div>
            </div>
            <div className="w-full md:w-1/2  text-white flex items-start justify-center ">
              <div >
                <h2 className="mt-4 text-lg">Have any questions? Feel free to reach out to us.</h2>
                <div className=" flex flex-col">

                 <div className="mb-4 text-lg">
                  Email : <Link className=" underline cursor-pointer " href={'mailto:info@ozsmarthome.com.au?Subject=Inquiry'}>info@ozsmarthome.com.au</Link>
                 </div>
                 <div className="text-lg">
                  Phone: <Link className=" underline cursor-pointer" href={'tel:1800865070'}>1800865070</Link>
                 </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" top-0 right-0 w-full h-full overflow-hidden absolute bottom-0">
          <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
            <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
export default ContactPage;