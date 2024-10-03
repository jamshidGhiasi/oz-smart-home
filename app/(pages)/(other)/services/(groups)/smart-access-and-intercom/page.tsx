/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Secure Access Solutions | Access & Intercom | Oz Smart Home',
  description: `Control entry to your home with ease. Our access and intercom systems prioritize security, privacy, and convenience.`,

}

const SmartAccessAndIntercomPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Smart Access & Intercom</span></h1>
        <span className="mb-4 block text-md font-rhd">Secure Entry, Seamless Communication</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">

<h2 className="font-bold mb-2 text-white">What is Access and Intercom?</h2>
<p className="text-[hsl(240,5%,74.9%)]">Access and intercom systems provide enhanced security and convenience for homeowners by controlling entry access to their property and allowing communication with visitors. These systems often include features such as video monitoring, remote unlocking, and two-way audio communication.</p>

<h2 className="font-bold mb-2 text-white">How We Offer Access and Intercom at Oz Smart Home:</h2>
<p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we prioritize your security and convenience. Our access and intercom systems allow you to monitor and control access to your property from anywhere. Whether you're expecting a package delivery or verifying a visitor, our systems provide peace of mind.</p>

<h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
<ul>
  <li className="text-[hsl(240,5%,74.9%)]">Video Monitoring: View live video feeds of your property's entry points for added security.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Remote Unlocking: Grant access to visitors or service providers remotely, even when you're not home.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Two-Way Communication: Communicate with visitors using two-way audio, allowing for easy conversations without opening the door.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Integration: Integrate with smart home systems for a seamless experience, including compatibility with popular brands like Ring and Nest.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Visitor Logs: Keep a record of visitors and access attempts for added security.</li>
</ul>

<h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Access and Intercom?</h2>
<p className="text-[hsl(240,5%,74.9%)]">Our access and intercom systems are designed to offer you peace of mind and control over who enters your property. With our solutions, you can enjoy enhanced security, convenience, and the ability to monitor and manage access from anywhere.</p>

      <ServicesNavigation nextService="cctv-security-and-alarm" />
      </div>
    </ContentWrapper>
  );
}

export default SmartAccessAndIntercomPage;