import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Reviews - Hear What Customers Say About Oz Smart Home',
  description: 'Read reviews and testimonials about Oz Smart Home. Discover why our customers love our smart living solutions for security, privacy, and energy efficiency.',

}


const ReviewsPage = () => {
    return (
        <main className="">
        <ContentWrapper className=' w-full px-2 lg:max-w-6xl mx-auto border'>
          REVIEWS PAGE
        </ContentWrapper>
      </main>
    )
}

export default ReviewsPage