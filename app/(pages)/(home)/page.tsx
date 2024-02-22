import OSHCopy from '@/components/shared/content/osh-copy'
import ContentWrapper from '@/components/shared/layout/content-wrapper'
import { Button } from '@/components/shared/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones } from 'lucide-react'
export default function Home() {
  return (
    <div>
      <ContentWrapper className='   relative  z-20  mx-4 my-4 h-[420px] lg:h-[600px]   overflow-hidden'>
        <div className="relative  sm:w-full md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-5/12 p-4 lg:p-0 w-full mx-auto h-full  z-10  flex flex-col items-center justify-center ">
          <div className=' text-white    '>
            <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 mt-0 text-center'> <OSHCopy /><span className='sub-heading'>Pioneering Smart Living Solutions</span></h1>
            <p className='text-md lg:text-lg text-center w-full max-w-[640px] mx-auto text-[hsl(240,5%,64.9%)]'>We redefine smart living with a focus on security, privacy, and energy efficiency. Our integrated solutions cover it all: from smart lighting and blinds to air conditioning, intercom, locks, CCTV, security, alarms and many more.</p>
          </div>
          <div className='mt-5 text-center '>
            <div className='mx-auto'>
              <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 rounded-xl mr-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#fff] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Get started today</Link>
              <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 rounded-xl bg-white text-black hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'/contact'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>
            </div>
            <div>
              <span className='text-white'>or </span>
              <Link className='text-white text-lg inline-flex  mt-4  items-center font-bold hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
        <div className='absolute w-[1200px]  lg:w-[2800px] left-[50%] -translate-x-[50%] h-full bottom-[-30px] lg:bottom-[-100px] bg-black'>
          <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
        </div>
      </ContentWrapper>
      <ContentWrapper className=' bg-black mx-4 my-4 py-12 lg:py-24 '>
        <div className=' text-white    '>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 mt-0 text-center'> Our Services<span className='sub-heading'>to transfer your home</span></h2>
        </div>
        <div className=' grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 p-4 lg:gap-x-8 lg:p-0 w-full max-w-7xl mx-auto'>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Lighting</span>
            <p>Illuminate with intelligence. Smart lighting adapts to your needs, enhancing ambiance and energy efficiency.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Blinds and Curtains</span>
            <p>Control sunlight with a touch. Smart blinds and curtains offer convenience and privacy at your fingertips.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Air Conditioning</span>
            <p>Stay cool, stay efficient. Smart air conditioning adjusts to your preferences, saving energy without sacrificing comfort.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Access and Intercom</span>
            <p>Secure, seamless access. Intercom systems and smart locks ensure safety and convenience for your home.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>CCTV - Security & Alarm</span>
            <p>Watchful eyes, always. Our CCTV and alarm systems provide peace of mind, protecting your home round-the-clock.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Home Entertainment</span>
            <p>Immerse yourself in entertainment. From home theaters to audio systems, enjoy a cinematic experience at home.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Home Network</span>
            <p>Connectivity without limits. Our home network solutions ensure reliable, high-speed connections for all your devices.</p>
          </Link>
          <Link href={'/'} className=' text-white border border-[hsl(240,3.7%,15.9%)] hover:bg-[#212121] p-6 transition-colors'>
            <span>Automation</span>
            <p>Effortless living, automated. Automate routines and tasks, making everyday life simpler and more efficient.</p>
          </Link>
          
        </div>
      </ContentWrapper>
      <ContentWrapper className=' bg-black mx-4 my-4 py-12 lg:py-24 '>
        <div className=' text-white    '>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 mt-0 text-center'> Our Process<span className='sub-heading'>to get you started with your smart home</span></h2>
        </div>
        <div className=' grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 p-4 lg:gap-x-8 lg:p-0 w-full max-w-7xl mx-auto'>
          <div className=' text-white bg-[#212121] p-6'>
            <Headphones className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-3 inline-block font-rhd'>Chat</span>
            <p className='text-[hsl(240,5%,64.9%)]'>We'll have a conversation with you to understand your unique needs and preferences. Your input shapes the foundation of your smart home journey with us.</p>
          </div>
          <div className=' text-white bg-[#212121] p-6'>
            <PenTool className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-3 inline-block  font-rhd'>Design</span>
            <p className='text-[hsl(240,5%,64.9%)]'>Our experts craft a personalized smart home design based on our discussions. Every detail, from security to energy efficiency, is meticulously planned.</p>
          </div>
          <div className=' text-white bg-[#212121] p-6'>
            <Kanban className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-3 inline-block font-rhd'>Plan</span>
            <p className='text-[hsl(240,5%,64.9%)]'>With your custom design in place, we create a comprehensive plan to bring your smart home to life. From smart lighting to security cameras, every aspect is considered.</p>
          </div>
          <div className=' text-white bg-[#212121] p-6'>
            <CheckSquare className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-3 inline-block font-rhd'>Deliver</span>
            <p className='text-[hsl(240,5%,64.9%)]'>It's time for the magic to unfold. Our team executes the plan flawlessly, installing your smart home solutions with precision. Sit back and watch your home transform.</p>
          </div>
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
      </div>
    </div>
  )
}
