/* eslint-disable react/no-unescaped-entities */

import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Effortless Living with Home Automation | Oz Smart Home',
  description: `Simplify your life with automation. Our solutions offer convenience, security, and energy efficiency for your home.`,

}

const AutomationPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Automation</span></h1>
        <span className="mb-4 block text-md font-rhd">Effortless Living, Simplified</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">


        <h2 className="font-bold mb-2 text-white">What is Home Automation?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Home automation refers to the control and automation of household activities and appliances. This includes tasks such as adjusting lighting, temperature, security systems, and entertainment devices. With home automation, you can create customized schedules and routines to simplify your daily life.</p>

        <h2 className="font-bold mb-2 text-white">How We Offer Home Automation at Oz Smart Home:</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we specialize in making your home smarter and more efficient. Our home automation solutions allow you to control various aspects of your home with ease. From setting the perfect lighting for movie nights to adjusting the thermostat before you arrive home, our systems put you in control.</p>

        <h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]">Customized Schedules: Create personalized schedules for lighting, temperature, and more.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Energy Efficiency: Optimize energy usage by automating lights, thermostats, and appliances.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Convenience: Control your home from anywhere using your smartphone or voice commands.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Integration: Seamlessly integrate with smart devices and platforms for a unified smart home experience.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Security: Enhance security with automated locks, cameras, and alarm systems.</li>
        </ul>

        <h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Home Automation?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">With Oz Smart Home, you can transform your home into a smart and efficient living space. Our home automation solutions offer unmatched convenience, energy savings, and security. Take control of your home's environment and enjoy the benefits of a truly connected lifestyle with our innovative systems.</p>

      <ServicesNavigation />
      </div>
    </ContentWrapper>
  );
}

export default AutomationPage;