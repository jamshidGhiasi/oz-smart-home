import ContentWrapper from "@/components/shared/layout/content-wrapper";
import NextBreadcrumb from "@/components/shared/navigation/breadcrumbs";
import { ChevronRight } from "lucide-react";
const MainLayout = ({ children }: { children: any }) => {
    return (
        <>
            <NextBreadcrumb
                homeElement={'Home'}
                separator={<ChevronRight className="w-4 h-4"/>}
                activeClasses='text-[#E9C31E]'
                containerClasses='flex items-center py-2  relative text-white  text-lg w-full max-w-4xl mx-auto mx-auto'
                listClasses='hover:underline mx-2 text-sm'
                capitalizeLinks
            />
            {children}
        </>
    )
}
export default MainLayout;