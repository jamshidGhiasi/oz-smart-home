import Link from "next/link"
import ContentWrapper from "../layout/content-wrapper"
import { ChevronRight, PhoneOutgoing, Send } from "lucide-react"

const CallToAction = async () => {
    return (
        <ContentWrapper className=' bg-black mx-4 my-4 py-4 lg:py-24 mb-[56px] lg:mb-auto'>
            <div className=' text-white   p-4 lg:p-0 mb-0 lg:mb-8 '>
                <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 text-left lg:text-center'> Discover the Possibilities<span className='sub-heading'>of smart living </span></h2>
                <p className='text-md lg:text-lg  w-full lg:max-w-[760px] xl:max-w-[760px]  2xl:max-w-[760px] mx-auto  text-left lg:text-center text-zinc-50'>At Oz Smart Home, we're committed to providing you with valuable insights, trends, and practical advice about smart living. Whether you're a tech enthusiast or new to smart homes, our goal is to provide the knowledge that makes integrating smart home solutions easy and rewarding.

                    Get in touch with us today or visit our <Link className="font-bold underline" href={'/knowledge-hub'}>knowledge hub</Link> to learn more about smart home technology.
                </p>
                <div className='mt-8 text-left lg:text-center '>
                    <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 font-bold rounded-xl mr-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#e5e5e5] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Get started today</Link>
                    <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 font-bold rounded-xl bg-[hsl(240,3.7%,15.9%)] text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'tel:1800865070'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>
                </div>
            </div>

         
        </ContentWrapper>
    )
}

export default CallToAction;