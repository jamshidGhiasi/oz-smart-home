/* eslint-disable react/no-unescaped-entities */

import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";
import Image from 'next/image'
import pic from '@/public/bg-test-1.jpg'

export const metadata: Metadata = {
  title: 'Knowledge Hub - Stay Informed with Oz Smart Home',
  description: 'Explore the Oz Smart Home Knowledge Hub for the latest trends in smart living. Discover tips, guides, and insights to optimize your home.',

}


const KnowledgeHubPage = () => {
  return (
    <>
      <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
        <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
          <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Knowledge Hub</span></h1>
          <span className="mb-4 block text-md font-rhd">Stay Informed</span>
        </div>
        <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto ">

          <p>Welcome to Oz Smart Home Knowledge Hub, your go-to source for all things related to smart home technology! We are committed to keeping you informed about the latest trends, innovations, and practical tips for integrating smart technology into your living spaces with a focus on Australian market. Check back weekly as we update this page with valuable insights and exciting developments in the world of smart homes.</p>

          <hr />

          <h2 className="mb-0">What is a Smart Home?</h2>
          <span className=" italic mb-3 inline-block">Published on February 25, 2024</span>

      <div className="text-[hsl(240,5%,74.9%)]">
      <p>The concept of a smart home has evolved significantly over the years. It began to take shape in the early 2000s with the introduction of devices like the Nest Thermostat in 2011, which brought intelligent temperature control to the mainstream market. This was followed by the launch of Amazon Echo with Alexa in 2014, a voice-controlled smart speaker that became a central hub for smart home control.</p>
          <p>Today, a smart home is a residence equipped with devices, appliances, and systems that can be controlled remotely and automated for improved efficiency, comfort, and security. Brands like Google with Google Home, Amazon with Alexa, and Apple with HomeKit have become household names in this space, offering a range of products that work seamlessly together to create a connected home ecosystem.</p>
          <p>These devices can range from smart thermostats and lighting to intelligent door locks and security cameras. The beauty of a smart home lies in its ability to connect these devices through a central hub or network, often accessible through a smartphone or voice commands.

          </p>
          <p>By embracing smart home technology, individuals can reap a multitude of benefits. Imagine being able to adjust your home's temperature before you even step through the door, ensuring a cozy environment in the winter and energy savings when you're away. Picture having lights that automatically turn on as you enter a room and dim when it's time to unwind. These conveniences not only enhance daily living but also contribute to cost savings and environmental sustainability.

          </p>
          <p>Let us guide you on the journey to a more connected, efficient, and comfortable home life. Stay tuned to Oz Smart Home for updates, insights, and everything you need to know about transforming your living space into a smart oasis.




          </p>
      </div>
         


        </div>
        <div className=" top-0 right-0 w-full h-full overflow-hidden absolute bottom-0">
          <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
            <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
          </div>
        </div>
      </ContentWrapper>
    </>
  )
}

export default KnowledgeHubPage