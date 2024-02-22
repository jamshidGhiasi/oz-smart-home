import OSHCopy from '@/components/shared/content/osh-copy'
import ContentWrapper from '@/components/shared/layout/content-wrapper'
import { Button } from '@/components/shared/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import { ChevronRight, PhoneOutgoing, Send } from 'lucide-react'
export default function Home() {
  return (
    <div>
      
    <ContentWrapper className='   relative  z-20 bg-black mx-4 my-4 h-[400px] lg:h-[700px]   overflow-hidden'>
      <div className="relative  sm:w-full md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-5/12 p-4 lg:p-0 w-full mx-auto h-full  z-10  flex flex-col items-center justify-center ">
        <div className=' text-white    '>
          <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl mb-4 mt-0 text-center'> <OSHCopy /><span className='sub-heading'>Pioneering Smart Living Solutions</span></h1>
          <p className='text-md lg:text-lg text-center w-full max-w-[640px] mx-auto text-[hsl(240,5%,64.9%)]'>We redefine smart living with a focus on security, privacy, and energy efficiency. Our integrated solutions cover it all: from smart lighting and blinds to air conditioning, intercom, locks, CCTV, security, alarms and many more.</p>
        </div>
        <div className='mt-5 text-center '>
          <div className='mx-auto'>
            <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 rounded-xl mr-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#fff] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Get started today</Link>
            <Link className='text-white text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 rounded-xl border border-[#fff]/20 hover:bg-[#212121]  transition-all' href={'/contact'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>
          </div>
          <div>
            <span className='text-white'>or </span>
            <Link className='text-white text-lg inline-flex hover:underline mt-4  items-center  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
      <div className='absolute  w-[3013px] left-[50%] -translate-x-[50%] h-full bottom-[-50px] bg-black'>
        <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
      </div>
    </ContentWrapper>
    <div className='grid content-center grid-cols-2 mx-4 my-4 gap-4'>
      <div className=' bg-[#ffffff] min-h-[400px]'>
        HELLO
      </div>
      <div className=' bg-[#212121] min-h-[400px]'>
        HELLO
      </div>
      <div className=' bg-[#212121] min-h-[400px]'>
        HELLO
      </div>
      <div className=' bg-[#212121] min-h-[400px]'>
        HELLO
      </div>
      <div className=' bg-[#212121] min-h-[400px]'>
        HELLO
      </div>
    </div>
    </div>
  )
}
