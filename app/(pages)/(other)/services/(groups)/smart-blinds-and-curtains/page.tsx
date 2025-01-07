/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Smart Blinds & Curtains | Sydney | Oz Smart Home',
  description: `Control light, security and privacy effortlessly with smart blinds and curtains. Optimise your space—get started with OZ Smart Home today.`,

}

const SmartBlindsAndCurtainsPage = async () => {
  return (
  <>
    <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Blinds & Curtains</span></h1>
        <span className="mb-4 block text-md font-rhd">Control Light, Enhance Privacy</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto ">

        <h2 className="font-bold mb-2 text-white">What are Smart Blinds and Curtains?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Smart blinds and curtains offer homeowners the ability to control their window coverings remotely. With features such as automated opening and closing, scheduling, and integration with smart home systems, these solutions provide convenience and energy efficiency.</p>

        <h2 className="font-bold mb-2 text-white">How We Offer Smart Blinds and Curtains at Oz Smart Home:</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we understand the importance of privacy and natural light in your home. Our smart blinds and curtains offer a seamless way to manage sunlight, privacy, and energy usage. Whether you want to let in the morning sun or create a cozy atmosphere in the evening, our systems give you full control.</p>

        <h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]">Convenient Control: Open or close blinds with a tap on your smartphone or with voice commands.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Energy Savings: Regulate sunlight to reduce the need for excessive heating or cooling.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Privacy: Adjust blinds remotely to maintain privacy, even when away from home.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Integration: Integrate with smart home systems like Somfy, Hunter Douglas, and IKEA for a seamless experience.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Voice Control: Use voice commands with Amazon Alexa, Apple HomeKit, or Google Assistant to operate your blinds and curtains.</li>
        </ul>

        <h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Smart Blinds and Curtains?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Our smart blinds and curtains are designed to enhance your lifestyle by offering convenience, privacy, and energy efficiency. With Oz Smart Home, you can enjoy the perfect balance of natural light and privacy, all at the touch of a button.</p>

        <ServicesNavigation nextService="smart-air-conditioning" />
        
      </div>
  </>


  );
}

export default SmartBlindsAndCurtainsPage;