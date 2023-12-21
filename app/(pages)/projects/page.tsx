import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Smart Home Projects in Sydney by OZ SMART HOME | Innovative Solutions for Modern Living',
  description: `Discover our showcase of cutting-edge smart home projects in Sydney. At OZ SMART HOME, we bring innovation to life with bespoke solutions for smart lighting, blinds, air conditioning, door locks, intercom systems, garage and gates, security cameras, and more. Explore how we're shaping the future of modern living in Sydney through our exceptional projects.`,
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