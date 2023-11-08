import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">


      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-auto mb-auto">
        <Image
          className="relative"
          src="/oz-smart-home-logo.svg"
          alt="OZ SMART HOME Logo"
          width={300}
          height={37}
          priority
        />
 
        <p >
         <span className="text-gray-500 after:inline-block after:w-2 after:h-2 after:content-[''] after:bg-[#E9C31E] after:mx-2 after:rounded-full">Affordable</span>
         <span className="text-gray-500 after:inline-block after:w-2 after:h-2 after:content-[''] after:bg-[#E9C31E] after:mx-2 after:rounded-full">Reliable</span>
         <span className="text-gray-500 after:inline-block after:w-2 after:h-2 after:content-[''] after:bg-[#E9C31E] after:mx-2 after:rounded-full">Secure</span>
         <span className='text-gray-500'>Fast</span>
        </p>
        <p className=' text-center mt-8 text-md'>We are adding our new projects. Stay tuned.</p>
      </div>
    <div>
    
        <p className=' text-center mt-8 text-lg'>In the meantime you can reach us on <a className=' underline text-[#E9C31E]' href="tel:1800865070">1800 865 070</a> or via <a className='underline text-[#E9C31E]' href="mailto:info@ozsmarthome.com.au">Email</a></p>
        <p className='mt-4 text-center text-sm text-amber-400'> You can also book an appointment to visit our smart showroom in St Ives via phone or email.</p>
    </div>

    <div className=' text-center text-xs mt-auto text-gray-600  '>
      <span>Copyright © 2023 OZ SMART HOME. ABN:27426823215</span>
    </div>
   
    </main>
  )
}
