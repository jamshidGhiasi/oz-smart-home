import OSHCopy from '@/components/shared/content/osh-copy'
import ContentWrapper from '@/components/shared/layout/content-wrapper'
import { Button } from '@/components/shared/ui/button'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="relative h-[calc(100vh_-_64px)]">
      <ContentWrapper className='  px-2  mx-auto absolute z-10 flex items-center justify-center h-full'>
        <div className='w-full md:w-full lg:w-3/12'>

          <h1 className='text-lg lg:text-3xl mb-4'> <OSHCopy /><span className='sub-heading'>Pioneering Intelligent Living Solutions</span></h1>
          <p className='text-lg'>At <OSHCopy />, we are dedicated to revolutionizing your living experience through cutting-edge smart home solutions. From intelligent lighting and automated blinds to state-of-the-art air conditioning, secure door locks, advanced intercom systems, and more, we bring innovation into every corner of your home.</p>
          <p className='text-lg'>Explore our range of <Link className=' underline' href={'/services'}>services</Link> designed to make your living space smarter, safer, and more convenient. <Link className=' underline' href={'/contact'}>Join us</Link> on a journey to embrace the future of intelligent living with <OSHCopy />.</p>
          <Link href={'tel:1800865070'} className='rounded-full mr-2 h-10 px-4 py-2 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300'>Free Consultation</Link>
          <Link href={'/contact'} className='rounded-full h-10 px-4 py-2 bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300'>Contact us</Link>
         
        </div>
      </ContentWrapper>

      <div className='fixed top-0 left-0 right-0 bottom-0 opacity-20'>
        <Image src={'/oz-smart-home-hero-image.jpg'} alt='oz smart home hero image' layout="fill"
          objectFit="cover" />
      </div>
    </main>
  )
}
