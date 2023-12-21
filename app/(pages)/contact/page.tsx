import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact OZ SMART HOME for Smart Home and Automation Inquiries | Get in Touch Today',
  description: 'Have questions about our smart home and automation solutions? Contact OZ SMART HOME today. Our expert team is ready to assist you with inquiries, support, and personalized solutions. Reach out for a seamless transition to a smarter, more connected home.',

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