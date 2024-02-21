import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects - See Oz Smart Home's Smart Living Solutions in Action`,
  description: `Explore Oz Smart Home's projects and see our smart living solutions in action. Discover how we transform homes with security, privacy, and efficiency.`,
}

const ProjectsPage = async () => {
    return (
        <main className="">
        <ContentWrapper className=' w-full px-2 lg:max-w-6xl mx-auto border'>
          PROJECTS PAGE
        </ContentWrapper>
      </main>
    );
}

export default ProjectsPage;