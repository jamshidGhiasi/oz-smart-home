/* eslint-disable react/no-unescaped-entities */

import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Efficient and Customized Cooling | Smart Air Conditioning | Oz Smart Home',
  description: `Stay cool and save energy. Smart air conditioning solutions tailored for comfort, security, and cost-effectiveness.`,

}

const SmartAirConditioningPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Air Conditioning</span></h1>
        <span className="mb-4 block text-md font-rhd">Efficient Cooling, Customized Comfort</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">

<h2 className="font-bold mb-2 text-white">What is Smart Air Conditioning?</h2>
<p className="text-[hsl(240,5%,74.9%)]">Smart air conditioning systems allow homeowners to control the temperature of their home remotely, adjust settings based on occupancy, and optimize energy usage. These systems often include features such as scheduling, temperature sensors, and integration with other smart devices.</p>

<h2 className="font-bold mb-2 text-white">How We Offer Smart Air Conditioning at Oz Smart Home:</h2>
<p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we provide smart air conditioning solutions that prioritize comfort, efficiency, and convenience. Our systems allow you to set specific temperatures for different rooms, create schedules to match your daily routine, and even adjust settings remotely while away from home.</p>

<h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
<ul>
  <li className="text-[hsl(240,5%,74.9%)]">Customizable Zones: Control the temperature of individual rooms or zones for personalized comfort.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Energy Efficiency: Save on energy costs with intelligent temperature control and scheduling.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Smart Integration: Seamlessly integrate with smart assistants like Alexa, Google Assistant, and Apple HomeKit.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Remote Access: Adjust settings and monitor your home's temperature from anywhere via your smartphone or tablet.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Health and Comfort: Maintain a healthy indoor environment with features such as air purification and humidity control.</li>
</ul>

<h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Smart Air Conditioning?</h2>
<p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we understand the importance of a comfortable and healthy home environment. Our smart air conditioning solutions not only offer convenience and energy savings but also prioritize your well-being. With our systems, you can enjoy a customized and efficient cooling experience tailored to your lifestyle.</p>

      <ServicesNavigation nextService="smart-access-and-intercom" />
      </div>
    </ContentWrapper>
  );
}

export default SmartAirConditioningPage;