import Link from "next/link";

const Footer = async() => {
    return (
       <div className=" bg-[hsl(240,3.7%,15.9%)] px-4 py-2 fixed bottom-0 left-0 right-0 z-30 text-[hsl(240,5%,64.9%)] flex justify-between">
             <span className="text-sm ">Copyright © 2024 Oz Smart Home. All rights reserved.</span>
             <Link className="underline" href={'tel:1800865070'}>1800865070</Link>
       </div>
    )
}
export default Footer;