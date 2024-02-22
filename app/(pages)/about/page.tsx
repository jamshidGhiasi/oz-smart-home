import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Oz Smart Home - Elevating Your Living Experience',
  description: `Learn about Oz Smart Home - pioneers in smart living solutions. Discover how we combine security, privacy, and energy efficiency to enhance your lifestyle.`,
}

const AboutPage = async () => {
    return (
      <ContentWrapper className='px-2  mx-auto  relative flex items-center justify-center h-full z-20'>
      <div className='w-full sm:w-full md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12 p-4 lg:p-0 text-white '>
        <h1 className='text-lg lg:text-2xl mb-4'> <OSHCopy /><span className='sub-heading'>Pioneering Smart Living Solutions</span></h1>
        <p className='text-md lg:text-lg'>Welcome to <OSHCopy />, where we redefine smart living with a focus on security, privacy, and energy efficiency. Our integrated solutions cover it all: from smart lighting and blinds to advanced air conditioning, intercom, locks, CCTV, security cameras, alarms and many more. With our state-of-the-art technology, your home is protected inside and out. Experience peace of mind and comfort with <OSHCopy />.</p>
      </div>

      VERSION 1
      Welcome to Oz Smart Home, where we are redefining the modern living experience. Established in 2020, we have quickly become a trusted name in smart home solutions, prioritizing security, privacy, and energy efficiency. What sets us apart is our commitment to providing cutting-edge technology at competitive prices. Unlike other smart home providers, we offer flexibility in solutions, ensuring that our services are tailored to meet your unique needs and budget.

At Oz Smart Home, we understand that every home is different. Whether you're building a new home or retrofitting an existing one, our range of services has you covered. From smart lighting and blinds to advanced air conditioning and security systems, our solutions are designed to seamlessly integrate into any space. We take pride in offering diverse smart devices that are compatible with multiple brands. This means you're not locked into a single brand, reducing the risk of time-consuming and costly troubleshooting.

Our approach to smart home solutions is centered on simplicity, efficiency, and affordability. We believe that the future of smart living should be accessible to everyone, which is why we strive to make our services cost-effective without compromising on quality. With Oz Smart Home, you can trust that you're getting the best value for your investment, with the added benefit of diverse compatibility and hassle-free after-sales support. Experience the difference with Oz Smart Home - where innovation meets affordability.

VERSION 2
At Oz Smart Home, we are committed to redefining the landscape of smart living solutions. Established in 2020, we've quickly emerged as industry leaders, driven by a passion for innovation, security, and efficiency. Our mission is simple: to provide cutting-edge smart home solutions that prioritize security, privacy, and energy efficiency, all while offering competitive pricing and unmatched flexibility.

Unlike other smart home providers, we understand that one size does not fit all. That's why we pride ourselves on our flexibility in tailoring solutions to meet the unique needs of each client. Whether you're building a new home or retrofitting an existing one, our expert team will work closely with you to design and implement a solution that seamlessly integrates into your lifestyle and budget.

One key aspect that sets us apart is our commitment to diversity and compatibility. Our range of smart devices and solutions are not bound to a single brand, providing you with a wider selection and eliminating the hassle of dealing with multiple vendors. This not only ensures greater flexibility in customization but also simplifies troubleshooting and after-sales support, ultimately saving you time and money. With Oz Smart Home, you can trust that your smart living experience will be hassle-free, efficient, and cost-effective.
    </ContentWrapper>
    );
}

export default AboutPage;