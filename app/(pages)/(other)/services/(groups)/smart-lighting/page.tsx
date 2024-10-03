/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Illuminate Your Space with Smart Lighting | Oz Smart Home',
  description: `Enhance ambiance and security with our smart lighting solutions. Experience convenience and energy efficiency at your fingertips.`,
}
const SmartLightingPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Lighting</span></h1>
        <span className="mb-4 block text-md font-rhd">Illuminate with Intelligence</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">
        <h2 className="font-bold mb-2 text-white">What is Smart Lighting?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Smart lighting refers to an innovative system that allows homeowners to control their lights remotely using a smartphone, tablet, or voice commands. These systems often include features such as dimming, color-changing capabilities, scheduling, and integration with other smart devices.</p>
        <h2 className="font-bold mb-2 text-white">How We Offer Smart Lighting at Oz Smart Home:</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we bring the future of lighting to your fingertips. Our smart lighting solutions go beyond the traditional on-off switch, allowing you to customize the ambiance of your home with ease. Whether you prefer bright, energizing light or soft, relaxing hues, our systems offer a wide range of options to suit your mood and activities.</p>
        <h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]">Remote Control: Adjust your lights from anywhere using your smartphone or tablet.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Customizable Scenes: Set the perfect ambiance for any occasion with pre-set lighting scenes.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Energy Efficiency: Save on energy bills by scheduling lights to turn off when not in use.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Integration: Seamlessly integrate with smart devices like Philips Hue, LIFX, and Nanoleaf for a fully automated home.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Voice Control: Control your lights with popular voice assistants such as Alexa, Siri, and Google Assistant.</li>
        </ul>
        <h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Smart Lighting?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Our team at Oz Smart Home is dedicated to enhancing your lifestyle with smart lighting solutions that prioritize convenience, energy efficiency, and security. With our expertise, you can transform your home into a smart, connected space that adapts to your needs and preferences.</p>
        <ServicesNavigation nextService="smart-blinds-and-curtains" />
      </div>
    
    </ContentWrapper>
  );
}
export default SmartLightingPage;