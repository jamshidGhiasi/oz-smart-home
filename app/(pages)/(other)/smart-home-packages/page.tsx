import ContentWrapper from "@/components/shared/layout/content-wrapper";
import PackagesPage from "@/components/shared/packages/packages";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Smart Home Packages | OZ Smart Home Sydney - Wireless & Loxone Systems',
    description: 'Explore our curated smart home packages designed for Australian homes — from essential wireless setups to full Loxone-powered automation. Book a free consultation today!',
    alternates: {
        canonical: 'https://www.ozsmarthome.com.au/smart-home-packages'
    }
}

export default async function Page() {
    return (

        <ContentWrapper className="relative  bg-black mx-4 my-4 px-8 lg:px-0 py-12 lg:py-16 ">
            <div className="relative text-white z-20 text-lg w-full max-w-4xl text-center  mx-auto">
                <h1 className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-0 text-white mb-4 text-left md:text-center'> <span className='sub-heading'>Smart Home Packages</span></h1>
                <p className="text-left text-md md:text-center mb-4 md:mb-0">Bring your home to life with tailored smart home packages. Whether you're starting small or going all-in with Loxone, our bundles offer everything from lighting and locks to audio, security, and full automation — professionally configured to suit your lifestyle.</p>

            </div>
            <PackagesPage />
        </ContentWrapper>

    )

}