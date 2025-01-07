import ContentWrapper from "@/components/shared/layout/content-wrapper";

const ServicesLayout = ({ children }: { children: any}) => {
    return(
        <ContentWrapper className="relative  z-20 bg-black lg:mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
          {children}
        </ContentWrapper>
  
            

    )
}

export default ServicesLayout;