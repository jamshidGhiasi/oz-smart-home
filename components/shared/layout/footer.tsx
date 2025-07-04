import { Instagram, PhoneOutgoing, Send, Youtube, AtSign, Facebook } from "lucide-react";
import Link from "next/link";
import ContentWrapper from "./content-wrapper";

const Footer = async () => {
    return (
        <div className=" bg-neutral-800 px-4 py-2  bottom-0 left-0 right-0 z-30 text-[hsl(240,5%,64.9%)] flex justify-between">
            <div className="relative  w-full max-w-4xl mx-auto  flex-col justify-between ">

                <div className="flex justify-between mb-4">
                    <div className="flex flex-col">
                        <h2 className="mt-4 mb-2">QUICK LINKS</h2>
                        <Link href={'/services'} className="hover:text-white hover:underline mb-2">Services</Link>
                        <Link href={'/projects'} className="hover:text-white hover:underline mb-2">Projects</Link>
                        <Link href={'/smart-home-packages'} className="hover:text-white hover:underline mb-2">Packages</Link>
                        <Link href={'/services/book-a-free-smart-home-consultation'} className="hover:text-white hover:underline mb-2">Book a Free Smart Home Consultation</Link>
                        <Link href={'/knowledge-hub'} className="hover:text-white hover:underline">Knowledge Hub</Link>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="mt-4 mb-2">CONTACT</h2>
                        <a className="inline-flex items-center hover:cursor-pointer hover:underline" href='tel:1800865070'><PhoneOutgoing className='h-4 w-4 mr-2' />1800&nbsp;865&nbsp;070</a>
                        <a className="inline-flex items-center hover:cursor-pointer hover:underline" href='mailto:info@ozsmarthome.com.au'><Send className='h-4 w-4 mr-2' />info@ozsmarthome.com.au</a>
                        <h2 className="mt-4 mb-2">Social Media</h2>
                        <div className="flex justify-start gap-2 mt-4">
                            <Link href={'https://www.instagram.com/ozsmarthome/'} rel="noopener noreferrer" target="_blank" aria-label="Visit our Instagram profile" className='flex underline' ><Instagram className='mr-2' /></Link>
                            <Link href={'https://www.facebook.com/p/OZ-SMART-HOME-61556389307850/'} rel="noopener noreferrer" target="_blank" aria-label="Visit our Facebook profile" className='flex underline ' ><Facebook className='mr-2' /></Link>
                            <Link href={'https://www.youtube.com/@oz-smart-home'} rel="noopener noreferrer" target="_blank" aria-label="Visit our YouTube Channel profile" className='flex underline ' ><Youtube className='mr-2' /></Link>
                            <Link href={'https://www.threads.com/@ozsmarthome'} rel="noopener noreferrer" target="_blank" aria-label="Visit our Threads profile" className='flex underline ' ><AtSign className='mr-2' /></Link>

                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-6 mb-4">
                    <span className="text-xs ">Copyright © 2025 Oz Smart Home. All rights reserved.</span>
                </div>

            </div>
        </div>
    )
}
export default Footer;