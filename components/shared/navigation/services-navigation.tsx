import { ChevronRight } from "lucide-react"
import Link from "next/link"

const ServicesNavigation = async ({ nextService}:{ nextService?: string}) => {
    return (
       <div className="flex justify-between items-center text-white py-3 mt-9 border-t">
         <Link className="text-xs md:text-sm font-bold inline-flex items-center hover:underline" href={'/services'} > View All Services</Link>
         {nextService && 
         
         <div className="text-xs md:text-sm flex items-center  capitalize  " >
            <span className="mr-2">Next: </span>
            <Link className="flex items-center  hover:underline" href={`/services/${nextService}`}>
                <span className="text-[#E9C31E]">{nextService.replace(/-/g, ' ')}</span> 
                <ChevronRight className="h-4 w-4" />
            </Link>
            </div>
         
         }
       </div>
    )
}

export default ServicesNavigation