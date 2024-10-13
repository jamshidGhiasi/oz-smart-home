import Link from "next/link"
import ContentWrapper from "../layout/content-wrapper"
import { PhoneOutgoing, Send } from "lucide-react"

const CallToAction = async () => {
    return (
        <ContentWrapper className=' bg-[#f5f6f7] mx-4 my-4 py-12 lg:py-24 '>
            <div className=' text-black    '>
                <h2 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 mt-0 text-center'>  Ready<span className='sub-heading'>to elevate your home and lifestyle? </span></h2>
            </div>
            <div className='mx-auto flex flex-col items-center  '>
                <p className='text-center font-b'>Contact us today for a free and obligation-free consultation tailored to your needs.</p>
                <div className='mt-3 mb-1'>
                    <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 border py-2 px-4 font-bold rounded-xl mr-4 text-black bg-[#E9C31E] border-[#E9C31E] hover:bg-[#fff] hover:border-white hover:text-black transition-all ' href={'/contact'}><Send className='h-4 w-4' /> Get started today</Link>
                    <Link className=' text-md lg:text-lg inline-flex items-center gap-x-2 py-2 px-4 font-bold rounded-xl bg-black text-white hover:bg-[#e5e5e5] hover:text-black  transition-all' href={'/contact'}><PhoneOutgoing className='h-4 w-4' /> Call us</Link>
                </div>
                <small className='block text-center'>You can also book a time to visit our Smart Showroom.</small>
            </div>
        </ContentWrapper>
    )
}

export default CallToAction;