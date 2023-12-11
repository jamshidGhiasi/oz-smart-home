import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
    className?: string
    props?: any
}
const SearchBar : React.FC<SearchBarProps>  = ({
    className,
    ...props
}) => {
    return(
        <Button variant="outline" size="icon" className={cn("border-none  ", className)}>
            <Search className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Search ozsmarthome.com.au</span>
        </Button>
    )
}

export default SearchBar;