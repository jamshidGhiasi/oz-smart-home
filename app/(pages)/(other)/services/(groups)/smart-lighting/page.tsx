/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { PhoneOutgoing, Send } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: 'Smart Lighting Services | Oz Smart Home',
  description: `Illuminate your home with Oz Smart Home's smart lighting. Control ambiance and energy use effortlessly. Discover your options now.`,
}
const SmartLightingPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Home Lighting Automation in Sydney and the Northern Beaches</span></h1>
        <span className="mb-4 block text-md font-rhd">Illuminate with Intelligence</span>
        <p className="text-white">At Oz Smart Home, we offer lighting systems that seamlessly adapt to your lifestyle. Whether you want to brighten up your living room, set the mood for a relaxing evening, or automate your lights for convenience and security, our smart lighting solutions provide the control and flexibility you need.
        </p>
        <p className="text-white">Get in touch with us today for a free quote!
        </p>
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 font-bold rounded-xl mt-4 bg-[hsl(240,3.7%,15.9%)] text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>


      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">
        <h2 className="font-bold mb-2 text-white">What is Smart Lighting?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Smart lighting refers to an innovative system that allows homeowners to control their lights remotely using a smartphone, tablet, or voice commands. These systems often include features such as dimming, color-changing capabilities, scheduling, and integration with other smart devices.
        </p>
        <h2 className="font-bold mb-2 text-white">Our Smart Home Lighting Solutions</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we bring the future of lighting to your fingertips. Our smart lighting solutions go beyond the traditional on-off switch, allowing you to customize the ambiance of your home with ease. Whether you prefer bright, energizing light or soft, relaxing hues, our systems offer a wide range of options to suit your mood and activities.</p>
        <h2 className="font-bold mb-2 text-white">Key features and benefits of our smart lighting systems include:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Remote Control:</span> Adjust your lights from anywhere using your smartphone or tablet.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Customizable Scenes:</span> Set the perfect ambiance for any occasion with pre-set lighting scenes.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Energy Efficiency:</span> Save on energy bills by scheduling lights to turn off when not in use.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Integration:</span> Seamlessly integrate with smart devices like Philips Hue, LIFX, and Nanoleaf for a fully automated home.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Voice Control:</span>  Control your lights with popular voice assistants such as Alexa, Siri, and Google Assistant.</li>
        </ul>
        <h2 className="font-bold mb-2 text-white">Why Choose Us for Your Smart Home Lighting Needs?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we pride ourselves on delivering personalized solutions tailored to your unique needs and preferences, ensuring your smart lighting perfectly fits your lifestyle. Your satisfaction is our top priority, which is why we maintain a customer-focused approach with clear communication, transparent pricing, and expert guidance at every step.</p>
        <p className="text-[hsl(240,5%,74.9%)]">Our experienced team handles every installation with precision and professionalism, offering ongoing support to make your transition to smart lighting seamless and hassle-free. Additionally, we are committed to quality, working exclusively with top-tier, reliable brands to ensure your smart home systems deliver outstanding performance and long-lasting value.</p>
        <h2 className="font-bold mb-2 text-white">Transform Your Home with Smart Lighting</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Ready to upgrade your home with energy-efficient, customizable, and secure lighting solutions? Get in touch with us today to learn more about our home lighting automation services or get a free quote.</p>
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 font-bold rounded-xl mt-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Contact us</Link>
        <ServicesNavigation nextService="smart-blinds-and-curtains" />
      </div>
    
    </ContentWrapper>
  );
}
export default SmartLightingPage;