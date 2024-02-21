import Image from "next/image"
import Link from "next/link"
const OSHBrand = () => {
    return (
     <div>

         <Image src={'/oz-smart-home-icon.svg'} alt="OS SMART HOME" width={30} height={30} />
         <span className="sr-only">OZ SMART HOME</span>
     </div>
        
    )
}

export default OSHBrand;