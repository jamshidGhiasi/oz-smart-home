import Image from "next/image"
import Link from "next/link"
const OSHBrand = () => {
    return (
        <Link href={'/'}
            className="rounded-md py-2  hover:bg-slate-100 dark:hover:bg-slate-800     ring-offset-white  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 flex flex-col items-center justify-center      ">
            <Image src={'/oz-smart-home-icon.svg'} alt="OS SMART HOME LOGO" width={30} height={30} />
        </Link>
    )
}

export default OSHBrand;