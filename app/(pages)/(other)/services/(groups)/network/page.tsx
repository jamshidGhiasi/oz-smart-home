/* eslint-disable react/no-unescaped-entities */

import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reliable Home Networking Solutions | Oz Smart Home',
  description: `Stay connected seamlessly. Our home network solutions prioritize security, speed, and energy efficiency.`,

}

const NetworkPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Home Network</span></h1>
        <span className="mb-4 block text-md font-rhd">Stay Connected, Seamlessly</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">

<h2 className="font-bold mb-2 text-white">What is Home Network?</h2>
<p className="text-[hsl(240,5%,74.9%)]">A home network is the foundation of a smart home, providing connectivity between all your devices. It includes routers, switches, and access points that ensure reliable and secure internet access throughout your home. A robust home network is essential for seamless operation of smart devices and applications.</p>

<h2 className="font-bold mb-2 text-white">How We Offer Home Network at Oz Smart Home:</h2>
<p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we understand the importance of a strong and secure home network. Our experts design and implement high-performance networks tailored to your home's layout and connectivity needs. Whether you have a small apartment or a multi-story house, we ensure reliable Wi-Fi coverage and seamless connectivity for all your smart devices.</p>

<h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
<ul>
  <li className="text-[hsl(240,5%,74.9%)]">Customized Setup: Design and configure a home network that suits your home's layout and device requirements.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Reliable Connectivity: Enjoy uninterrupted internet access with strategically placed routers and access points.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Secure Network: Implement robust security measures to protect your data and privacy.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Integration: Seamlessly connect all your smart devices to the network for centralized control.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Expandable and Scalable: Easily expand your network as your smart home grows, ensuring consistent performance.</li>
</ul>

<h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Home Network?</h2>
<p className="text-[hsl(240,5%,74.9%)]">With Oz Smart Home, you can trust that your home network is in expert hands. Our tailored solutions provide reliable connectivity, robust security, and seamless integration with your smart devices. Experience the convenience of a strong and secure home network that powers your smart home devices effortlessly.</p>

      <ServicesNavigation nextService="automation" />
      </div>
    </ContentWrapper>
  );
}

export default NetworkPage;