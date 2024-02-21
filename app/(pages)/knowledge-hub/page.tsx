import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Knowledge Hub - Stay Informed with Oz Smart Home',
  description: 'Explore the Oz Smart Home Knowledge Hub for the latest trends in smart living. Discover tips, guides, and insights to optimize your home.',

}


const KnowledgeHubPage = () => {
    return (
        <main className="">
        <ContentWrapper className=' w-full px-2 lg:max-w-6xl mx-auto border'>
          KNOWLEDGE HUB PAGE
        </ContentWrapper>
      </main>
    )
}

export default KnowledgeHubPage