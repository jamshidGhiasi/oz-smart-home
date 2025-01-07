/* eslint-disable react/no-unescaped-entities */

import { OSHCopy } from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { PhoneOutgoing, Send } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'CCTV & Security Systems | Oz Smart Home',
  description: `Ensure peace of mind with Oz Smart Home's CCTV and security systems. Protect your home 24/7. Contact us for a free consultation today.`,

}

const CCTVSecurityAndAlarmPage = async () => {
  return (
    <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>CCTV - Security & Alarm System Installation in Sydney and the Northern Beaches</span></h1>
        <span className="mb-4 block text-md font-rhd">24/7 Surveillance, Peace of Mind</span>
        <p className="text-white">At Oz Smart Home, we make home security simple and effective with our advanced CCTV - Security & Alarm systems. Designed for round-the-clock surveillance, our solutions keep your home safe, secure, and protected no matter where you are.
        </p>
        <p className="text-white">Whether you’re upgrading your current CCTV camera system or installing one for the first time, our expert team provides personalized solutions to suit your needs. Get in touch with us today to learn more about our services or get a quote.</p>

        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 font-bold rounded-xl mt-4 bg-[hsl(240,3.7%,15.9%)] text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>


      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">


        <h2 className="font-bold mb-2 text-white">What is CCTV - Security & Alarm?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">CCTV (Closed Circuit Television) systems combined with security and alarm features provide comprehensive surveillance and protection for your home. These systems offer real-time monitoring, recording capabilities, motion detection, and integration with alarm systems for enhanced security.</p>


        <h2 className="font-bold mb-2 text-white">Expert Security Camera Installation</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Servicing Sydney and the Northern Beaches, we offer professional installation services tailored to fit your home's unique layout and security needs. Our experienced technicians ensure your CCTV and alarm systems are installed seamlessly, providing optimal coverage and functionality.</p>

       

        <h2 className="font-bold mb-2 text-white">Key features and benefits of our security and alarm systems include:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">24/7 Surveillance:</span> Monitor your home in real-time, day or night, for added security.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Motion Detection:</span> Receive alerts and recordings when motion is detected in designated areas.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Remote Viewing:</span> Access live feeds and recorded footage from your smartphone or computer.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Alarm Integration:</span> Connect CCTV with alarm systems for a comprehensive security solution.</li>
          <li className="text-[hsl(240,5%,74.9%)]"><span className="font-bold text-white">Cloud and Local Storage:</span>  Store footage securely in the cloud or on a local drive for easy access and backup.</li>
        </ul>

        <h2 className="font-bold mb-2 text-white">Why Choose Us for Your CCTV Camera System Needs?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">We don't believe in one-size-fits-all security. Our team takes the time to understand your specific needs and customize a security camera and alarm system that provides optimal coverage for your home. Our experienced technicians ensure that your security system is set up efficiently, with minimal disruption to your daily routine. We pride ourselves on professional service and clean, accurate installations.</p>
        <p className="text-[hsl(240,5%,74.9%)]">Our team also offers continued support and maintenance to ensure your systems are always performing at their best, giving you peace of mind day in and day out. We believe that home security should be both reliable and accessible. That's why our CCTV - Security & Alarm systems combine premium protection with budget-friendly pricing, delivering exceptional value without compromising on quality.</p>
        <h2 className="font-bold mb-2 text-white">Upgrade Your Security System Today</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Let us help you create a safer, smarter home. Get in touch with us for a consultation or to schedule your security camera and alarm system.</p>
        <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 font-bold rounded-xl mt-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Contact us</Link>
        <ServicesNavigation nextService="entertainment-and-av" />
      </div>
    </ContentWrapper>
  );
}

export default CCTVSecurityAndAlarmPage;