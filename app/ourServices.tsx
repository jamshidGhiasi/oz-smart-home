import { AirVent, Blinds, Cctv, DoorOpen, Lightbulb, Theater, Wifi, Workflow } from "lucide-react";
export const ourServices = [
    {
        title: "Lighting",
        description: "Illuminate with intelligence. Smart lighting adapts to your needs, enhancing ambiance and energy efficiency.",
        cta: "Find out more",
        url: "/services/smart-lighting",
        icon: <Lightbulb className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Blinds and Curtains",
        description: "Control sunlight with a touch. Smart blinds and curtains offer convenience and privacy at your fingertips.",
        cta: "Find out more",
        url: "/services/smart-blinds-and-curtains",
        icon: <Blinds className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Air Conditioning",
        description: "Stay cool, stay efficient. Smart air conditioning adjusts to your preferences, saving energy without sacrificing comfort.",
        cta: "Find out more",
        url: "/services/smart-air-conditioning",
        icon: <AirVent className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Access and Intercom",
        description: "Secure, seamless access. Intercom systems and smart locks ensure safety and convenience for your home.",
        cta: "Find out more",
        url: "/services/smart-access-and-intercom",
        icon: <DoorOpen className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "CCTV, Security & Alarm",
        description: "Watchful eyes, always. Our CCTV and alarm systems provide peace of mind, protecting your home round-the-clock.",
        cta: "Find out more",
        url: "/services/cctv-security-and-alarm",
        icon: <Cctv className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Home Entertainment",
        description: "Immerse yourself in entertainment. From home theaters to audio systems, enjoy a cinematic experience at home.",
        cta: "Find out more",
        url: "/services/entertainment-and-av",
        icon:  <Theater className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Home Network",
        description: "Connectivity without limits. Our home network solutions ensure reliable, high-speed connections for all your devices.",
        cta: "Find out more",
        url: "/services/network",
        icon:  <Wifi className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Automation, Scenes & Routines",
        description: "Effortless living, automated. Automate routines and tasks, making everyday life simpler and more efficient.",
        cta: "Find out more",
        url: "/services/automation",
        icon:  <Workflow className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
]