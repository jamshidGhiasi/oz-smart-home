
import {OSHCopy} from "@/components/shared/content/osh-copy";
import ContentWrapper from "@/components/shared/layout/content-wrapper";
import { Metadata } from "next";
import Image from "next/image";
import pic from '@/public/bg-test-1.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
export const metadata: Metadata = {
  title: `Projects - See Oz Smart Home's Smart Living Solutions in Action`,
  description: `Explore Oz Smart Home's projects and see our smart living solutions in action. Discover how we transform homes with security, privacy, and efficiency.`,
}

const projects = [
  {
    image: 'ozsmarthome-google-business-profile-photo-1@2x-100',
    title: 'Home Network Upgrade',
    type: 'Residential',
    suburb: 'Belrose',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-2@2x-100',
    title: 'Home Network Upgrade',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2024'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-3@2x-100',
    title: 'Home Network Upgrade',
    type: 'Residential',
    suburb: 'Belrose',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-4@2x-100',
    title: 'Smart Lighting | Apple HomeKit, Google Home',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2021'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-5@2x-100',
    title: 'Smart Alarm System | BOSCH 2000',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-6@2x-100',
    title: 'Smart Access and Intercom',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-7@2x-100',
    title: 'Smart Blinds | Apple HomeKit, Google',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2023'
  },
  {
    image: 'ozsmarthome-google-business-profile-photo-8@2x-100',
    title: 'CCTV | Security Camera',
    type: 'Residential',
    suburb: 'St Ives',
    date: '2020'
  }
]
const ProjectsPage = async () => {
  return (
    <>
      <ContentWrapper className="relative  z-20 bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
        <div className="relative text-white z-20 text-lg w-full max-w-2xl mx-auto">
          <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 mt-0 text-left text-white'> <span className='sub-heading'>Projects</span></h1>
          <span className="mb-4 block text-md font-rhd">View Our Work</span>
        </div>
        <div className="relative  z-20 text-lg w-full max-w-2xl mx-auto ">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects && projects.map((project, index) => {
                return (
                  <CarouselItem key={index} className="">
                    <div className="p-1">
                      <Card className=" bg-transparent border-none">
                        <CardContent className="flex  items-center justify-center p-6">                          
                          <Image src={`/projects/${project.image}.jpg`} alt={project.title} width={650} height={650} />
                        </CardContent>
                        <CardContent className="flex flex-col text-white" >
                          <span className="font-bold">{project.title}</span>
                          <span>{project.type}</span>
                          <span className="text-sm">{project.suburb} | {project.date}</span>
                          <span></span>
                        </CardContent>
                        
                      </Card>
                    </div>
                
                  </CarouselItem>
                )
              })}



            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className=" top-0 right-0 w-full h-full overflow-hidden absolute bottom-0">
          <div className='absolute  w-[2013px] left-[50%] -translate-x-[50%] h-full bottom-[-100px] bg-black opacity-35'>
            <Image src={pic} className='absolute bottom-0' objectFit='contain' alt='' />
          </div>
        </div>
      </ContentWrapper>
    </>
  );
}
export default ProjectsPage;