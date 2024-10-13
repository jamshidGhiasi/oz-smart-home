import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ChevronRight, Lightbulb } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ReactElement } from "react";



const oshTileVariant = cva("",
    {
        variants: {
            variant: {
                light:"bg-white rounded-lg shadow-sm hover:shadow-md p-6 transition-shadow",
                dark: "text-white bg-[#212121] p-6"
            },
   
        },
        defaultVariants: {
            variant: "light",
            
          },
    }
);

export interface TileProps
  extends 
  VariantProps<typeof oshTileVariant> {
  description: string;
  cta?: string;
  url?: string;
  icon?: ReactElement;
  className?: string;
  title: string
  
}

const Tile =  React.forwardRef<HTMLButtonElement, TileProps>(
    ({ className, variant, title, description, cta, url, icon, ...props }, ref) => {
    return (
        <>
        {
            url && 
                <Link href={url} className={cn(oshTileVariant({ variant, className }))} >
                    {icon}
                    <h3 className='font-bold text-xl mb-3'>{title}</h3>
                    <p className='text-gray-800'>{description}</p>
                    {url && <Link className=' text-md inline-flex mt-3 font-bold  items-center hover:underline text-black  ' href={url}> {cta} <ChevronRight className="h-4 w-4" /></Link>}
                </Link>
        }
        {
            !url && 
            <div  className='  bg-white rounded-lg shadow-sm hover:shadow-md p-6 transition-shadow '>
                {icon}
                <h3 className='font-bold text-xl mb-3'>{title}</h3>
                <p className='text-gray-800'>{description}</p>                
            </div>
        }
        </>
   )
})

Tile.displayName = "Tile";

export { Tile, oshTileVariant }