
import ContentWrapper from "@/components/shared/layout/content-wrapper"
import dynamic from "next/dynamic"

const Scene = dynamic(() => import('@/components/shared/content/3d-scene'), { ssr: false} )

const VirtualSmartHomeTour = async() => {
    return (
        <>
        <ContentWrapper className="h-lvh bg-slate-300 ">
            
                 <Scene />
           
        </ContentWrapper>
        </>
    )
}

export default VirtualSmartHomeTour