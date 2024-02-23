/* eslint-disable react/no-unescaped-entities */
import OSHCopy from '@/components/shared/content/osh-copy'
import ContentWrapper from '@/components/shared/layout/content-wrapper'
import { Button } from '@/components/shared/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv } from 'lucide-react'
export default function Home() {
  return (
    <div className=' -mt-2 lg:mt-4 lg:mb-14'>
      <ContentWrapper className='   relative  z-20  mx-4 h-[500px] lg:h-[600px]   overflow-hidden'>
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
          <Image src={pic} className='absolute bottom-0' alt='' />
        </div>
      </ContentWrapper>
      <ContentWrapper className=' bg-[#f5f6f7] mx-4 my-4 py-12 lg:py-24 '>
        <div className=' text-black    '>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 mt-0 text-center'> Our Services<span className='sub-heading'>to make your home smart</span></h2>
        </div>
        <div className=' grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 p-4 lg:gap-8 lg:p-0 w-full max-w-7xl mx-auto'>
          <Link href={'/'} className=' text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Lightbulb className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Lighting</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Illuminate with intelligence. Smart lighting adapts to your needs, enhancing ambiance and energy efficiency.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold  items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className='   text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Blinds className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-2'>Blinds and Curtains</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Control sunlight with a touch. Smart blinds and curtains offer convenience and privacy at your fingertips.</p>
            <Link className=' text-md inline-flex mt-3 font-bold    items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className=' text-white bg-[hsl(0,0%,20%)]  p-6 '>
            <AirVent className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Air Conditioning</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Stay cool, stay efficient. Smart air conditioning adjusts to your preferences, saving energy without sacrificing comfort.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <DoorOpen className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Access and Intercom</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Secure, seamless access. Intercom systems and smart locks ensure safety and convenience for your home.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Cctv className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>CCTV, Security & Alarm</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Watchful eyes, always. Our CCTV and alarm systems provide peace of mind, protecting your home round-the-clock.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Theater className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Home Entertainment</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Immerse yourself in entertainment. From home theaters to audio systems, enjoy a cinematic experience at home.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Wifi className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Home Network</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Connectivity without limits. Our home network solutions ensure reliable, high-speed connections for all your devices.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Workflow className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Automation, Scenes & Routines</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Effortless living, automated. Automate routines and tasks, making everyday life simpler and more efficient.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
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
            <span className='font-bold text-xl mb-2 inline-block font-rhd'>Chat</span>
            <p className='text-[hsl(240,5%,64.9%)]'>We'll have a conversation with you to understand your unique needs and preferences. Your input shapes the foundation of your smart home journey with us.</p>
          </div>
          <div className=' text-white bg-[#212121] p-6'>
            <PenTool className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block  font-rhd'>Design</span>
            <p className='text-[hsl(240,5%,64.9%)]'>Our experts craft a personalized smart home design based on our discussions. Every detail, from security to energy efficiency, is meticulously planned.</p>
          </div>
          <div className=' text-white bg-[#212121] p-6'>
            <Kanban className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block font-rhd'>Plan</span>
            <p className='text-[hsl(240,5%,64.9%)]'>With your custom design in place, we create a comprehensive plan to bring your smart home to life. From smart lighting to security cameras, every aspect is considered.</p>
          </div>
          <div className=' text-white bg-[#212121] p-6'>
            <CheckSquare className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block font-rhd'>Deliver</span>
            <p className='text-[hsl(240,5%,64.9%)]'>It's time for the magic to unfold. Our team executes the plan flawlessly, installing your smart home solutions with precision. Sit back and watch your home transform.</p>
          </div>
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
  )
}
