import OSHCopy from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Services - Smart Home Solutions by Oz Smart Home',
  description: `Explore Oz Smart Home's range of services for smart living. From security systems to energy efficiency solutions, we enhance your home with innovation.`,

}

const ServicesPage = async () => {
  return (
    <ContentWrapper className='px-2  mx-auto  relative  justify-center z-20'>

      <div className='w-full sm:w-full md:w-8/12 lg:w-6/12 xl:w-6/12 2xl:w-4/12 p-4 lg:p-0 text-white '>
        <h1 className='text-lg lg:text-2xl mb-4'> <OSHCopy /><span className='sub-heading'>Pioneering Smart Living Solutions</span></h1>
        <p className='text-md lg:text-lg'>Welcome to <OSHCopy />, where we redefine smart living with a focus on security, privacy, and energy efficiency. Our integrated solutions cover it all: from smart lighting and blinds to advanced air conditioning, intercom, locks, CCTV, security cameras, alarms and many more. With our state-of-the-art technology, your home is protected inside and out. Experience peace of mind and comfort with <OSHCopy />.</p>
      </div>
      Smart Lighting:

"Revolutionize your home's lighting with our Smart Lighting solutions. Effortlessly control and customize your lights to match your lifestyle, all while enhancing security and energy efficiency. Smart lighting not only provides convenience but also offers added layers of security by allowing you to remotely control your lights, deterring potential intruders. With energy-saving features, you can lower utility costs without compromising on comfort or safety."
Smart Blinds and Curtains:

"Experience the convenience and efficiency of Smart Blinds and Curtains. These innovative solutions not only add a touch of luxury to your home but also enhance security and privacy. Easily manage natural light and privacy settings with the touch of a button or a voice command. Smart blinds and curtains contribute to energy efficiency by regulating sunlight, reducing the need for excessive air conditioning or heating. This intelligent system helps you maintain a comfortable environment while keeping costs low."
Smart Air Conditioning:

"Transform the way you cool your home with Smart Air Conditioning. Our systems are designed for optimal comfort, security, and energy efficiency. Smart AC adapts to your schedule and preferences, ensuring rooms are always at the perfect temperature when you need them. With remote access, you can adjust settings from anywhere, improving security by simulating occupancy. Enjoy cost savings with energy-efficient cooling, as the system intelligently adjusts based on usage patterns, reducing electricity bills without compromising comfort."
Access and Intercom:

"Secure your home with Access and Intercom systems that prioritize safety, privacy, and convenience. Our solutions allow you to control and monitor access to your home, enhancing security while providing peace of mind. Smart locks and intercoms enable secure entry, even when you're away, minimizing the risk of unauthorized access. With encrypted communication, your privacy is safeguarded. These systems not only bolster security but also contribute to energy efficiency by eliminating the need for keys and reducing the likelihood of energy loss through unlocked doors."
CCTV - Security & Alarm:

"Protect your home with our comprehensive CCTV - Security & Alarm systems. Our advanced cameras and alarms provide 24/7 surveillance, deterring potential intruders and enhancing security. CCTV footage can be accessed remotely, offering peace of mind and assisting authorities in case of incidents. With motion detection and smart alerts, you'll always be informed of any unusual activity. Our security systems not only prioritize your safety and privacy but also contribute to energy efficiency by providing a proactive approach to home security. All this is achieved with cost-effective solutions tailored to your needs."
Home Entertainment:

"Elevate your entertainment experience with our Home Entertainment solutions. Enjoy immersive audio and visual experiences in the comfort of your home while maintaining security, privacy, and energy efficiency. Our home theaters and audio systems are designed to deliver superior quality without compromising on safety. Integrated with smart controls, you can create the perfect ambiance for movie nights or entertaining guests. These systems are not only a source of enjoyment but also contribute to energy efficiency by optimizing power consumption and reducing standby usage, keeping costs low."
Home Network:

"Stay connected seamlessly with our Home Network solutions. Our robust and secure networks ensure fast, reliable connectivity for all your devices while prioritizing security and privacy. With encrypted connections and advanced firewall features, your data remains protected from cyber threats. Our networks are designed for energy efficiency, optimizing data transmission to reduce power consumption. Enjoy uninterrupted connectivity and peace of mind, knowing your network is reliable, secure, and cost-effective."
Automation:

"Experience the convenience and efficiency of home automation with our tailored solutions. Our Automation systems streamline daily tasks, enhance security, and improve energy efficiency while keeping costs low. From scheduling lights and appliances to integrating with security systems, automation makes life simpler and safer. Smart automation not only provides convenience but also contributes to energy savings by optimizing usage patterns and reducing wastage. With our cost-effective solutions, you can enjoy a smarter, more efficient home without breaking the bank."
    </ContentWrapper>
  );
}

export default ServicesPage;