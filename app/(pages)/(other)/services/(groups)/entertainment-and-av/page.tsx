/* eslint-disable react/no-unescaped-entities */

import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home Entertainment | Sydney | Oz Smart Home',
  description: `Transform your space with immersive audio and visual experiences. Explore our cinematic home entertainment solutions. Contact us today.`,

}

const EntertainmentAndAVPage = async () => {
  return (
   
      <>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto">
        <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Entertainment, Home Theater & AV</span></h1>
        <span className="mb-4 block text-md font-rhd">Immersive Cinema at Home</span>
      </div>
      <div className="relative text-white z-20 text-lg w-full max-w-4xl mx-auto ">

        <h2 className="font-bold mb-2 text-white">What is Home Entertainment?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">Home entertainment systems bring the cinema experience right into your living room. These systems include features such as high-definition audio, immersive surround sound, large-screen displays, and integration with streaming services for a complete entertainment setup.</p>

        <h2 className="font-bold mb-2 text-white">How We Offer Home Entertainment at Oz Smart Home:</h2>
        <p className="text-[hsl(240,5%,74.9%)]">At Oz Smart Home, we believe in elevating your entertainment experience. Our home entertainment solutions combine cutting-edge technology with seamless integration, allowing you to enjoy your favorite movies, music, and games in stunning clarity and sound.</p>

        <h2 className="font-bold mb-2 text-white">Features and Benefits:</h2>
        <ul>
          <li className="text-[hsl(240,5%,74.9%)]">Immersive Audio: Experience rich, immersive sound with high-definition audio systems.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Large-Screen Displays: Enjoy movies, sports, and games on large, high-quality displays for a cinematic feel.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Streaming Integration: Access your favorite streaming services like Netflix, Hulu, and Disney+ directly from your entertainment system.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Voice Control: Control your entertainment system with voice commands using popular assistants like Alexa and Google Assistant.</li>
          <li className="text-[hsl(240,5%,74.9%)]">Gaming Experience: Enhance your gaming experience with immersive sound and responsive displays.</li>
        </ul>

        <h2 className="font-bold mb-2 text-white">Why Choose Oz Smart Home for Home Entertainment?</h2>
        <p className="text-[hsl(240,5%,74.9%)]">With Oz Smart Home, you can create the ultimate home entertainment setup tailored to your preferences. Whether it's movie nights with the family or immersive gaming sessions, our solutions offer high-quality audio, stunning visuals, and seamless integration for an unmatched entertainment experience.</p>

      <ServicesNavigation nextService="network" />
      </div>
      </>
   
  );
}

export default EntertainmentAndAVPage;