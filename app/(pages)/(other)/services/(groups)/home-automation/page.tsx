/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { PhoneOutgoing, Send } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Home Automation Solutions | Oz Smart Home',
  description: `Simplify daily life with home automation from Oz Smart Home. Control your environment easily. Get started with a consultation today.`,

}

const AutomationPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Home Automation Systems Installation in Sydney and the Northern Beaches</span></h1>
        <span className="mb-4 block text-md font-rhd">Effortless Living, Simplified</span>
        <p className="text-white">At Oz Smart Home, we bring the future of home living to your doorstep. Specializing in smart home automation systems, we help homeowners in Sydney and the Northern Beaches transform their spaces into seamlessly connected and intuitive environments.
        </p>
        <p className="text-white">Get in touch with us today to learn more about our services or get a quote.
        </p>
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 font-bold rounded-xl mt-4 bg-[hsl(240,3.7%,15.9%)] text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>


      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto ">


        <h2 className="font-bold mb-2 text-white">What is Home Automation?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Home automation refers to the control and automation of household activities and appliances. This includes tasks such as adjusting lighting, temperature, security systems, and entertainment devices. With home automation, you can create customized schedules and routines to simplify your daily life.
        </p>

        <h2 className="font-bold mb-2 text-white">Our Home Automation Services</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we specialize in making your home smarter and more efficient. Our home automation solutions allow you to control various aspects of your home with ease. From setting the perfect lighting for movie nights to adjusting the thermostat before you arrive home, our systems put you in control.</p>
        <p className="text-[hsl(240,5%,74.9%)]">With a commitment to quality, security, and customization, we provide end-to-end services from consultation to installation. Our experts work with you to design a system tailored to your lifestyle, ensuring effortless integration and ease of use.</p>

        <h2 className="font-bold mb-2 text-white">Features and benefits of our smart home automation systems include:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Customized Schedules:</span> Create personalized schedules for lighting, temperature, and more.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Energy Efficiency:</span> Optimize energy usage by automating lights, thermostats, and appliances.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Convenience:</span> Control your home from anywhere using your smartphone or voice commands.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Integration:</span> Seamlessly integrate with smart devices and platforms for a unified smart home experience.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Security:</span>  Enhance security with automated locks, cameras, and alarm systems.</li>
        </ul>

        <h2 className="font-bold mb-2 text-white">Why Choose Us for Your Home Automation Needs in Sydney?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Our team has extensive experience in smart home technology, ensuring every system we install is reliable, intuitive, and built to last. We prioritize understanding your unique needs and preferences, delivering customized smart home solutions designed specifically for your lifestyle.</p>
        <p className="text-[hsl(240,5%,74.9%)]">In addition, our home automation systems work harmoniously with your existing devices and current setup, ensuring a smooth transition to smart living. You can count on us to be with you every step of the way—from the initial consultation to ongoing support—ensuring a smooth and stress-free experience.</p>
        <h2 className="font-bold mb-2 text-white">Upgrade Your Home with Seamless Automation</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Take control of your home like never before. Contact us today to learn how we can help you transform your living space with cutting-edge home automation systems that complement your lifestyle.</p>
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 font-bold rounded-xl mt-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Contact us</Link>
      <ServicesNavigation />
      </div>
    </ContentWrapper>
  );
}

export default AutomationPage;