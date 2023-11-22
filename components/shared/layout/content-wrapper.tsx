import { cn } from "@/lib/utils"

interface ContentWrapperProps {
    className?: string
    children: React.ReactNode
    props?: any
}
const ContentWrapper: React.FC<ContentWrapperProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div
            className={cn("max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", className)}
            {...props}
        >

            {children}
        </div>
    )
}

export default ContentWrapper;