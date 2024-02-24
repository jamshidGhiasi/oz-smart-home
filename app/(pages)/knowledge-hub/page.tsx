import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'

export const metadata: Metadata = {
  title: 'Knowledge Hub - Stay Informed with Oz Smart Home',
  description: 'Explore the Oz Smart Home Knowledge Hub for the latest trends in smart living. Discover tips, guides, and insights to optimize your home.',

}


const KnowledgeHubPage = () => {
  return (
    <ContentWrapper className='   relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-24 min-h-[calc(100vh-64px-40px-2rem)] overflow-hidden'>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Knowledge Hub</span></h1>
        <span className="mb-4 block text-md font-rhd">Stay Informed</span>
      </div>
      <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
        <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
      </div>
    </ContentWrapper>
  )
}

export default KnowledgeHubPage