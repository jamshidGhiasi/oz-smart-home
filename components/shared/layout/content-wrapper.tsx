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
            className={className}
            {...props}
        >

            {children}
        </div>
    )
}

export default ContentWrapper;