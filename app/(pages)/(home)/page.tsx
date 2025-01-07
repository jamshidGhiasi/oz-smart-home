/* eslint-disable react/no-unescaped-entities */
import { OSHCopy } from '@/components/shared/content/osh-copy'
import ContentWrapper from '@/components/shared/layout/content-wrapper'
import { Button } from '@/components/shared/ui/button'
import Link from 'next/link'


import { ChevronRight, PhoneOutgoing, Send, PenTool, CheckSquare, Kanban, Headphones, Lightbulb, Blinds, AirVent, DoorOpen, Theater, Wifi, Workflow, Webcam, Cctv, Info } from 'lucide-react'
import CallToAction from '@/components/shared/content/call-to-action'
import { Metadata } from 'next'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
export const metadata: Metadata = {
  title: `Smart Home Solutions | Oz Smart Home`,
  description: `Explore innovative smart home solutions at Oz Smart Home. Enhance your lifestyle today with tailored automation and security services.`,
}

const projects = [
  {
    image: 'ozsmarthome-google-business-profile-photo-1@2x-100',
    title: 'Home Network Upgrade',
    type: 'Residential',
    suburb: 'Belrose',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-2@2x-100',
    title: 'Home Network Upgrade',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2024'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-3@2x-100',
    title: 'Home Network Upgrade',
    type: 'Residential',
    suburb: 'Belrose',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-4@2x-100',
    title: 'Smart Lighting | Apple HomeKit, Google Home',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2021'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-5@2x-100',
    title: 'Smart Alarm System | BOSCH 2000',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-6@2x-100',
    title: 'Smart Access and Intercom',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-7@2x-100',
    title: 'Smart Blinds | Apple HomeKit, Google',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-8@2x-100',
    title: 'CCTV | Security Camera',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2020'
  }
]


export default function Home() {


  return (
    <div className=' -mt-2 lg:mt-4 lg:mb-14'>

      <ContentWrapper className='   relative  z-20  mx-4 h-[550px] md:h-[500px] lg:h-[700px]   overflow-hidden bg-[#fdfdfb]'>
        <div className="relative  w-full sm:w-10/12 md:w-10/12  max-w-7xl p-4 lg:p-0 mx-auto h-full  z-10  flex flex-col items-stretch sm:items-start justify-start sm:justify-center pt-20 sm:pt-0 ">
          <div className=' text-white text-center sm:text-left    '>
            <h1 className='text-4xl  sm:text-6xl lg:text-6xl mb-4 mt-0 '> <OSHCopy variant={"dark"} >Os Smart Home</OSHCopy><span className='sub-heading text-sm sm:text-2xl md:text-2xl text-zinc-500'>Smart Home and Automation Experts</span></h1>
            <p className='text-sm lg:text-lg  w-full max-w-[480px] lg:max-w-[540px] mx-auto text-zinc-800'>We offer a variety of smart home solutions in Sydney and the Northern Beaches to simplify your daily routine. Ready to elevate your home and lifestyle? Live smarter with Oz Smart Home.</p>
          </div>
          <div className='mt-5 text-center '>
            <div className='mx-auto'>
              <Link className=' text-md w-full sm:w-auto lg:text-lg mb-4 sm:mb-0 inline-flex items-center gap-x-2 py-3 sm:py-2 px-4 mr-4 font-bold rounded-xl text-black  bg-[#E9C31E] border-[#E9C31E] hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us for a free quote</Link>
              <Link className=' text-md w-full sm:w-auto lg:text-lg inline-flex items-center gap-x-2  py-3 sm:py-2 px-4 rounded-xl font-bold   bg-black text-white hover:bg-[#e5e5e5] hover:text-black  transition-all ' href={'/services'}><Info className='h-4 w-4' /> Find out more</Link>
            </div>

          </div>
        </div>

        <div className=' absolute bg-[#fdfdfb] top-0 left-0 h-full w-full overflow-hidden'>
          <figure className='hero-banner'></figure>

        </div>

      </ContentWrapper>
      <ContentWrapper className=' bg-black mx-4 my-4 pt-4 pb-1 lg:py-24 '>
        <div className=' text-white   p-4 lg:p-0 mb-0 lg:mb-8'>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 text-left lg:text-center'> Our Services<span className='sub-heading text-1xl md:text-3xl'>to make your home smart</span></h2>
          <p className='text-md lg:text-lg  w-full  lg:max-w-[760px] xl:max-w-[760px]  2xl:max-w-[760px] mx-auto  text-left lg:text-center text-[hsl(240,5%,64.9%)] '>At Oz Smart Home, we specialize in creating innovative, connected spaces that enhance your lifestyle. Whether you want to have smart home security systems, optimise energy use, or redefine home entertainment, our expertise ensures your home is as smart as it is stylish.</p>
        </div>
        <div className=' grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 p-4 pt-0 lg:gap-8 xs:p-0 w-full max-w-7xl mx-auto'>
          <Link href={'/services/smart-lighting'} className=' text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Lightbulb className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Lighting</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Illuminate with intelligence. Smart lighting adapts to your needs, enhancing ambiance and energy efficiency.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold  items-center hover:underline  ' href={'/services/smart-lighting'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/smart-blinds-and-curtains'} className='   text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Blinds className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-2'>Blinds and Curtains</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Control sunlight with a touch. Smart blinds and curtains offer convenience and privacy at your fingertips.</p>
            <Link className=' text-md inline-flex mt-3 font-bold    items-center hover:underline  ' href={'/services/smart-blinds-and-curtains'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/smart-air-conditioning'} className=' text-white bg-[hsl(0,0%,20%)]  p-6 '>
            <AirVent className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Air Conditioning</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Stay cool, stay efficient. Smart air conditioning adjusts to your preferences, saving energy without sacrificing comfort.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services/smart-air-conditioning'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/smart-access-and-intercom'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <DoorOpen className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Access and Intercom</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Secure, seamless access. Intercom systems and smart locks ensure safety and convenience for your home.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services/smart-access-and-intercom'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/cctv-security-and-alarm'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Cctv className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>CCTV, Security & Alarm</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Watchful eyes, always. Our CCTV and alarm systems provide peace of mind, protecting your home round-the-clock.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services/cctv-security-and-alarm'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/entertainment-and-av'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Theater className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Home Entertainment</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Immerse yourself in entertainment. From home theaters to audio systems, enjoy a cinematic experience at home.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services/entertainment-and-av'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/network'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Wifi className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Home Network</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Connectivity without limits. Our home network solutions ensure reliable, high-speed connections for all your devices.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services/network'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
          <Link href={'/services/home-automation'} className='  text-white bg-[hsl(0,0%,20%)]  p-6'>
            <Workflow className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <h3 className='font-bold text-xl mb-3'>Automation, Scenes & Routines</h3>
            <p className='text-[hsl(240,5%,64.9%)]'>Effortless living, automated. Automate routines and tasks, making everyday life simpler and more efficient.</p>
            <Link className='text-white text-md inline-flex mt-3 font-bold   items-center hover:underline  ' href={'/services/home-automation'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          </Link>
        </div>
      </ContentWrapper>
      <ContentWrapper className=' bg-white mx-4 my-4 pb-1 pt-4 lg:py-24 '>
        <div className=' text-black  p-4 lg:p-0 mb-0 lg:mb-8   '>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 text-left lg:text-center'> Our Process<span className='sub-heading'>to get you started with your smart home</span></h2>
        </div>
        <div className=' grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 p-4 pt-0 lg:gap-x-8 xs:p-0 w-full max-w-7xl mx-auto'>
          <div className='  p-0  sm:p-2'>
            <Headphones className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block font-rhd'>Chat</span>
            <p className='text-zinc-800'>We'll have a conversation with you to understand your unique needs and preferences. Your input shapes the foundation of your smart home journey with us.</p>
          </div>
          <div className='   p-0  sm:p-2'>
            <PenTool className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block  font-rhd'>Design</span>
            <p className='text-zinc-800'>Our experts craft a personalized smart home design based on our discussions. Every detail, from security to energy efficiency, is meticulously planned.</p>
          </div>
          <div className='   p-0  sm:p-2'>
            <Kanban className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block font-rhd'>Plan</span>
            <p className='text-zinc-800'>With your custom design in place, we create a comprehensive plan to bring your smart home to life. From smart lighting to security cameras, every aspect is considered.</p>
          </div>
          <div className='   p-0  sm:p-2'>
            <CheckSquare className='w-8 h-8 text-[#E9C31E] mb-2  ' />
            <span className='font-bold text-xl mb-2 inline-block font-rhd'>Deliver</span>
            <p className='text-zinc-800'>It's time for the magic to unfold. Our team executes the plan flawlessly, installing your smart home solutions with precision. Sit back and watch your home transform.</p>
          </div>
        </div>

      </ContentWrapper>
      <ContentWrapper className=' bg-black mx-4 my-4 pb-1 pt-4 lg:py-24 '>
        <div className=' text-white text-left lg:text-center  p-4'>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 text-left lg:text-center'>Future-Proof Your Living Space<span className='sub-heading'>with Oz Smart Home</span></h2>
          <p className='text-md lg:text-lg  w-full lg:max-w-[760px] xl:max-w-[760px]  2xl:max-w-[780px] mx-auto  text-left lg:text-center text-[hsl(240,5%,64.9%)]'>Imagine a home that grows with you—one that adapts to your and your family’s needs, keeps you connected, and simplifies your daily life. With Oz Smart Home, you can make that a reality. Since 2020, we have been providing professional smart home installation services in Sydney and the Northern Beaches, redefining living spaces with greater comfort, convenience, and security. We know every home is unique, and that's why our smart home solutions consultants take the time to understand your lifestyle. Whether it's automating your lighting, boosting security, or creating a next-level entertainment setup, we can design a system that fits your life perfectly.</p>
          <Link className='font-bold hover:underline sm:text-lg inline-flex justify-center items-center text-center mt-4 mx-auto ' href={'/about'}>Learn more about us <ChevronRight className="h-4 w-4" /></Link>
        </div>
      </ContentWrapper>
      <ContentWrapper className=' bg-white mx-4 my-4 pb-1 pt-4 lg:py-24 '>
        <div className='  text-left lg:text-center  p-4'>
          <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 text-left lg:text-center text-black'>Previous Projects<span className='sub-heading'>to inspire your project</span></h2>
          <p className='text-md lg:text-lg  w-full lg:max-w-[760px] xl:max-w-[760px]  2xl:max-w-[780px] mx-auto  text-left lg:text-center text-zinc-800'>At Oz Smart Home, we’ve had the privilege of bringing smart home technology to a number of households across Sydney. From cozy apartments to sprawling family homes, our projects showcase our expertise in creating connected spaces tailored to each client’s needs.</p>

          <div className="relative  z-20 text-lg w-full max-w-6xl mx-auto ">
            <Carousel
              opts={{
                align: "center",
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects && projects.map((project, index) => {
                  return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                      <div className="p-1">
                        <Card className="bg-transparent border-none shadow-none">
                          <CardContent className="flex  items-center justify-center p-6">
                            <Image src={`/projects/${project.image}.jpg`} alt={project.title} width={650} height={650} />
                          </CardContent>
                          <CardContent className="flex flex-col justify-start items-start text-zinc-800" >
                            <span className="font-bold">{project.title}</span>
                            <span>{project.type}</span>
                            <span className="text-sm">{project.suburb} | {project.date}</span>
                            <span></span>
                          </CardContent>

                        </Card>
                      </div>

                    </CarouselItem>
                  )
                })}



              </CarouselContent>
              <CarouselPrevious className='-left-2 lg:-left-12 top-1/2 -translate-y-1/2' />
              <CarouselNext className='-right-2 lg:-right-12 top-1/2 -translate-y-1/2' />
            </Carousel>
          </div>

          <Link className='font-bold hover:underline sm:text-lg inline-flex justify-center items-center text-center mt-8 mx-auto  ' href={'/projects'}>More projects <ChevronRight className="h-4 w-4" /></Link>
        </div>
      </ContentWrapper>
      <CallToAction />

    </div>
  )
}
