/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'CCTV & Security Systems | Oz Smart Home',
  description: `Ensure peace of mind with Oz Smart Home's CCTV and security systems. Protect your home 24/7. Contact us for a free consultation today.`,

}

const CCTVSecurityAndAlarmPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>CCTV, Security & ALram</span></h1>
        <span className="mb-4 block text-md font-rhd">24/7 Surveillance, Peace of Mind</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">
      

<h2 className="font-bold mb-2 text-white">What is CCTV - Security & Alarm?</h2>
<p className="text-[hsl(240,5%,74.9%)]">CCTV (Closed Circuit Television) systems combined with security and alarm features provide comprehensive surveillance and protection for your home. These systems offer real-time monitoring, recording capabilities, motion detection, and integration with alarm systems for enhanced security.</p>

<h2 className="font-bold mb-2 text-white">How We Offer CCTV - Security & Alarm at Oz Smart Home:</h2>
<p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we prioritize the safety of your property and loved ones. Our CCTV systems provide round-the-clock monitoring, allowing you to keep an eye on your home from anywhere. Combined with advanced security and alarm features, you can receive instant alerts and take action in case of any suspicious activity.</p>

<h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
<ul>
  <li className="text-[hsl(240,5%,74.9%)]">24/7 Surveillance: Monitor your home in real-time, day or night, for added security.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Motion Detection: Receive alerts and recordings when motion is detected in designated areas.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Remote Viewing: Access live feeds and recorded footage from your smartphone or computer.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Alarm Integration: Connect CCTV with alarm systems for a comprehensive security solution.</li>
  <li className="text-[hsl(240,5%,74.9%)]">Cloud Storage: Store footage securely in the cloud for easy access and backup.</li>
</ul>

<h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for CCTV - Security & Alarm?</h2>
<p className="text-[hsl(240,5%,74.9%)]">With Oz Smart Home, you can have peace of mind knowing your home is under constant surveillance. Our CCTV systems offer advanced features to deter intruders, monitor activity, and provide evidence in case of incidents. Protect your home and loved ones with our comprehensive security solutions.</p>

      <ServicesNavigation nextService="entertainment-and-av" />
      </div>
    </ContentWrapper>
  );
}

export default CCTVSecurityAndAlarmPage;