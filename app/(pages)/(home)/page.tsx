/* eslint-disable react/no-unescaped-entities */
import {OSHCopy} from '@/components/shared/content/osh-copy'
import ContentWrapper from '@/components/shared/layout/content-wrapper'
import { Button } from '@/components/shared/ui/button'
import Link from 'next/link'
import {ourServices} from '@/app/ourServices'
import {ourProcess} from '@/app/ourProcess'

import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv, Info } from 'lucide-react'
import CallToAction from '@/components/shared/content/call-to-action'
import {Tile} from '@/components/shared/ui/tile'

export default function Home() {
  
  
  return (
    <div className=' -mt-2 lg:mt-4 lg:mb-14'>
  
      <ContentWrapper className='   relative  z-20  mx-4 h-[550px] md:h-[500px] lg:h-[700px]   overflow-hidden bg-[#fdfdfb]'>
        <div className="relative  w-full sm:w-10/12 md:w-10/12  max-w-7xl p-4 lg:p-0 mx-auto h-full  z-10  flex flex-col items-stretch sm:items-start justify-start sm:justify-center pt-20 sm:pt-0 ">
          <div className=' text-white text-center sm:text-left    '>
            <h1 className='text-4xl  sm:text-6xl lg:text-6xl mb-4 mt-0 '> <OSHCopy variant={"dark"} >os smart home</OSHCopy><span className='sub-heading text-sm sm:text-2xl md:text-2xl text-zinc-500'>Smart Home and Automation Experts</span></h1>
            <p className='text-sm lg:text-lg  w-full max-w-[480px] lg:max-w-[540px] mx-auto text-zinc-800'>We offer a variety of smart home solutions to simplify your daily routine. Ready to elevate your home and lifestyle? Live smarter with oz smart home.</p>
          </div>
          <div className='mt-5 text-center '>
            <div className='mx-auto'>
              <Link className=' text-md w-full sm:w-auto lg:text-lg mb-4 sm:mb-0 inline-flex items-center gap-x-2 py-3 sm:py-2 px-4 mr-4 font-bold rounded-xl text-black  bg-[#E9C31E] border-[#E9C31E] hover:bg-[#fff] hover:border-white hover:text-black transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us for a free quote</Link>
              <Link className=' text-md w-full sm:w-auto lg:text-lg inline-flex items-center gap-x-2  py-3 sm:py-2 px-4 rounded-xl font-bold   bg-black text-white hover:bg-[#e5e5e5] hover:text-black  transition-all ' href={'/services'}><Info className='h-4 w-4' /> Find out more</Link>
            </div>
   
          </div>
        </div>

        <div className=' absolute bg-[#fdfdfb] top-0 left-0 h-full w-full overflow-hidden'>
          <figure className='hero-banner'></figure>

        </div>
     
      </ContentWrapper>
      <ContentWrapper className=' bg-gray-100 mx-4 my-4 py-12 lg:py-24 '>
        <div className=' text-black    '>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 mt-0 text-center'> Our Services<span className='sub-heading'>to make your home smart</span></h2>
        </div>
        <div className=' grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 p-4 lg:gap-8 lg:p-0 w-full max-w-7xl mx-auto '>


        { ourServices.map((service, index)=> {
          return(
            <Tile 
              key={index}
              title={service.title}
              description={service.description}
              cta={service.cta}
              url={service.url}
              icon={service.icon}
              variant={'light'}
            />
          )
        })}
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
      <CallToAction/> 

    </div>
  )
}
