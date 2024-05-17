import React from 'react'
import { ArrowDown01 } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative min-h-[90vh] bg-dark-french_violet'>
    <div className='relative w-full min-h-[80vh] items-center justify-around flex-col sm:flex-row flex py-[3rem] sm:py-1'>
      
      <section className=' max-w-[40vh] pb-[3rem] sm:pb-0'>
        <h1 className='text-3xl text-dark-honeydew py-[1rem]'>
          Ace NEET: <span className='text-2xl text-dark-amaranth_purple-700 font-bold '>
          Your Ultimate Gateway to Medical School Success
          </span>
        </h1>
        <h1 className='text-sm text-dark-honeydew pb-[1.5rem]' style={{
          fontFamily: "Oswald, sans-serif",
          
        }}>
        Prepare for the rigorous NEET examinations with our comprehensive online courses designed to equip you with the knowledge and skills needed to excel.
        </h1>
        <button className='hover:shadow-sm hover:shadow-dark-periwinkle-500 rounded-md px-6 py-2 bg-gradient-to-tr from-dark-dark_purple via-dark-dark_purple-400 to-dark-jordy_blue-100 hover:translate-x-2 hover:scale-110 transition-all duration-200 ease-out text-dark-honeydew font-semibold'>
          Explore
        </button>
      </section>

      <section className='max-w-[50vh]'>
        <Image src="/hero-logo (1).png" alt='hero-logo' width={700} height={600} />
      </section>
    </div>

    <div className='min-h-[10vh] bg-dark-rich_black py-[4px] w-full justify-center text-center items-center flex flex-col gap-y-[5px]'>
        <h1 className='text-sm text-dark-honeydew-500' style={{
          fontFamily: "Oswald, sans-serif",
          
        }}>
        Courses Await For you!! Connect With us
        </h1>

        <div className='hover:bg-dark-jordy_blue-100 transition-all hover:scale-105 hover:translate-y-1 duration-300 ease-in-out rounded-full px-2 py-2'>
        <ArrowDown01 className='text-dark-honeydew-600 hover:text-dark-honeydew-500 ' />
        </div>
        
    </div>

    <section className='absolute inset-0 w-[400px] h-[300px] grad-1'>
    </section>
  </div>
  )
}

export default Hero