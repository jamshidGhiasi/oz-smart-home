import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";
import Image from "next/image";
import pic from '@/public/bg-test-1.jpg'
import ProfileForm from "@/components/shared/content/contact-form";

export const metadata: Metadata = {
  title: 'Contact Oz Smart Home - Get in Touch for Smart Solutions',
  description: 'Contact Oz Smart Home for innovative smart home solutions. Reach out to us for inquiries, consultations, and expert assistance.',
   alternates: {
    canonical: 'https://www.ozsmarthome.com.au/contact'
  }
}



const ContactPage = async () => {
  return (
    <>
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Contact</span></h1>
        <span className="mb-4 block text-md font-rhd">See how we can help you</span>

      </div>
      <div className="relative  z-20 text-lg w-full max-w-4xl mx-auto">
      <ProfileForm />
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