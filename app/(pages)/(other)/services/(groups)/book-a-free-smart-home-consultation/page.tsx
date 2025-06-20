
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import ServicesNavigation from "@/components/shared/navigation/services-navigation";
import { Metadata } from "next";

import BookingPage from "@/components/calendarly/calendarly-embed";

export const metadata: Metadata = {
    title: 'Book A Free Smart Home Consultation | Oz Smart Home',
    description: 'Book your free smart home consultation in Sydney! Get expert guidance on Home Assistant, Loxone, lighting, security, and automation — all tailored to your home and budget.',
    alternates: {
        canonical: "https://www.ozsmarthome.com.au/services/book-a-free-smart-home-consultation"
    }
}
const FreeSmartHomeConsultationPage = async () => {
    return (
        <>
            <ContentWrapper className="relative  bg-black mx-4 my-4 mb-0 px-0 lg:px-0 ">
                <div className="relative text-white z-20 text-lg w-full max-w-6xl mx-auto">
                    <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white md:text-center'> <span className='sub-heading'>Book a Free Smart Home Consultation</span></h1>
                    <p className="text-left text-md md:text-center max-w-3xl mx-auto" >Book your free smart home consultation in Sydney! Get expert guidance on Home Assistant, Loxone, lighting, security, and automation — all tailored to your home and budget.</p>


                </div>
            </ContentWrapper>
            <BookingPage />
        </>
    )
}
export default FreeSmartHomeConsultationPage;