/* eslint-disable react/no-unescaped-entities */
import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'
import Link from "next/link";
import { AirVent, Blinds, Cctv, ChevronRight, DoorOpen, Lightbulb, Theater, Wifi, Workflow } from "lucide-react";
export const metadata: Metadata = {
  title: 'Smart Home Services | Sydney | Oz Smart Home',
  description: `Discover comprehensive smart home services for convenience and security. Explore OZ Smart Home solutions to elevate your living experience.`,
}
const ServicesPage = async () => {
  return (
    <>
      <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
        <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
          <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Services</span></h1>
          <span className="mb-4 block text-md font-rhd">See our smart home solutions</span>
        </div>
        <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"><Lightbulb className='w-8 h-8 text-[#E9C31E] mb-2  ' /> Smart Lighting</h2>
          <p className="text-[hsl(240,5%,64.9%)]"> Revolutionize your home's lighting with our Smart Lighting solutions. Effortlessly control and customize your lights to match your lifestyle, all while enhancing security and energy efficiency. Smart lighting not only provides convenience but also offers added layers of security by allowing you to remotely control your lights, deterring potential intruders. With energy-saving features, you can lower utility costs without compromising on comfort or safety.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/smart-lighting'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"><Blinds className='w-8 h-8 text-[#E9C31E] mb-2  ' /> Smart Blinds and Curtains</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Experience the convenience and efficiency of Smart Blinds and Curtains. These innovative solutions not only add a touch of luxury to your home but also enhance security and privacy. Easily manage natural light and privacy settings with the touch of a button or a voice command. Smart blinds and curtains contribute to energy efficiency by regulating sunlight, reducing the need for excessive air conditioning or heating. This intelligent system helps you maintain a comfortable environment while keeping costs low.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/smart-blinds-and-curtains'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"><AirVent className='w-8 h-8 text-[#E9C31E] mb-2  ' /> Smart Air Conditioning</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Transform the way you cool your home with Smart Air Conditioning. Our systems are designed for optimal comfort, security, and energy efficiency. Smart AC adapts to your schedule and preferences, ensuring rooms are always at the perfect temperature when you need them. With remote access, you can adjust settings from anywhere, improving security by simulating occupancy. Enjoy cost savings with energy-efficient cooling, as the system intelligently adjusts based on usage patterns, reducing electricity bills without compromising comfort.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/smart-air-conditioning'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"> <DoorOpen className='w-8 h-8 text-[#E9C31E] mb-2  ' />Access and Intercom</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Secure your home with Access and Intercom systems that prioritize safety, privacy, and convenience. Our solutions allow you to control and monitor access to your home, enhancing security while providing peace of mind. Smart locks and intercoms enable secure entry, even when you're away, minimizing the risk of unauthorized access. With encrypted communication, your privacy is safeguarded. These systems not only bolster security but also contribute to energy efficiency by eliminating the need for keys and reducing the likelihood of energy loss through unlocked doors.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/smart-access-and-intercom'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"> <Cctv className='w-8 h-8 text-[#E9C31E] mb-2  ' /> CCTV - Security & Alarm</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Protect your home with our comprehensive CCTV - Security & Alarm systems. Our advanced cameras and alarms provide 24/7 surveillance, deterring potential intruders and enhancing security. CCTV footage can be accessed remotely, offering peace of mind and assisting authorities in case of incidents. With motion detection and smart alerts, you'll always be informed of any unusual activity. Our security systems not only prioritize your safety and privacy but also contribute to energy efficiency by providing a proactive approach to home security. All this is achieved with cost-effective solutions tailored to your needs.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/cctv-security-and-alarm'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"><Theater className='w-8 h-8 text-[#E9C31E] mb-2  ' /> Home Entertainment</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Elevate your entertainment experience with our Home Entertainment solutions. Enjoy immersive audio and visual experiences in the comfort of your home while maintaining security, privacy, and energy efficiency. Our home theaters and audio systems are designed to deliver superior quality without compromising on safety. Integrated with smart controls, you can create the perfect ambiance for movie nights or entertaining guests. These systems are not only a source of enjoyment but also contribute to energy efficiency by optimizing power consumption and reducing standby usage, keeping costs low.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/entertainment-and-av'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"><Wifi className='w-8 h-8 text-[#E9C31E] mb-2  ' />Home Network</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Stay connected seamlessly with our Home Network solutions. Our robust and secure networks ensure fast, reliable connectivity for all your devices while prioritizing security and privacy. With encrypted connections and advanced firewall features, your data remains protected from cyber threats. Our networks are designed for energy efficiency, optimizing data transmission to reduce power consumption. Enjoy uninterrupted connectivity and peace of mind, knowing your network is reliable, secure, and cost-effective.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/network'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
          <h2 className="sticky md:sticky lg:static top-[64px] bg-black py-2"><Workflow className='w-8 h-8 text-[#E9C31E] mb-2  ' /> Automation</h2>
          <p className='text-[hsl(240,5%,64.9%)]'>Experience the convenience and efficiency of home automation with our tailored solutions. Our Automation systems streamline daily tasks, enhance security, and improve energy efficiency while keeping costs low. From scheduling lights and appliances to integrating with security systems, automation makes life simpler and safer. Smart automation not only provides convenience but also contributes to energy savings by optimizing usage patterns and reducing wastage. With our cost-effective solutions, you can enjoy a smarter, more efficient home without breaking the bank.</p>
          <Link className='text-white text-md inline-flex mt-1 font-bold   items-center hover:underline  ' href={'/services/home-automation'}> Find out more <ChevronRight className="h-4 w-4" /></Link>
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
export default ServicesPage;