import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Oz Smart Home - Get in Touch for Smart Solutions',
  description: 'Contact Oz Smart Home for innovative smart home solutions. Reach out to us for inquiries, consultations, and expert assistance.',

}

const ContactPage = async () => {
    return (
        <main className="">
        <ContentWrapper className=' w-full px-2 lg:max-w-6xl mx-auto border'>
          CONTACT PAGE
        </ContentWrapper>
      </main>
    );
}

export default ContactPage;