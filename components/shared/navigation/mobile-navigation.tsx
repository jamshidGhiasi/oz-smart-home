import { Menu } from "lucide-react"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
    className?: string
    props?: any
} 
const MobileNavigation: React.FC<MobileNavigationProps> = ({
    className,
    ...props
}) => {
    return (
        <Button variant="outline" size="icon" className={cn("border-none  ", className)} aria-label="Menu">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
        </Button>
    )
}

export default MobileNavigation;