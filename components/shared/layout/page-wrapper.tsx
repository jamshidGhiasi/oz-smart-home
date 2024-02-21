import { ReactNode } from 'react';
import Image from 'next/image'

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 flex-grow pb-4">
      {children}
         
      <div className='fixed top-0 left-0 right-0 bottom-0 opacity-10 sm:opacity-10 '>
        <Image src={'/oz-smart-home-hero-image.jpg'} alt='oz smart home hero image' layout="fill"
          objectFit="cover" />
      </div>
    </div>
  );
}