import { CheckSquare, Headphones, Kanban, PenTool } from "lucide-react";

export const ourProcess = [
    {
        title: "Chat",
        description: "We'll have a conversation with you to understand your unique needs and preferences. Your input shapes the foundation of your smart home journey with us.",
        icon: <Headphones className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Design",
        description: "Our experts craft a personalized smart home design based on our discussions. Every detail, from security to energy efficiency, is meticulously planned.",
        icon: <PenTool className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Plan",
        description: "With your custom design in place, we create a comprehensive plan to bring your smart home to life. From smart lighting to security cameras, every aspect is considered.",
        icon: <Kanban className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
    {
        title: "Deliver",
        description: "It's time for the magic to unfold. Our team executes the plan flawlessly, installing your smart home solutions with precision. Sit back and watch your home transform.",
        icon: <CheckSquare className='w-8 h-8 text-[#E9C31E] mb-2  ' />
    },
   
]