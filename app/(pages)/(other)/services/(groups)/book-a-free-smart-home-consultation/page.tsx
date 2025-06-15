
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
            <BookingPage />
        </>
    )
}
export default FreeSmartHomeConsultationPage;