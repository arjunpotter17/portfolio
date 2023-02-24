import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import errorImg from '../assets/error.png'

const Experience = () => {
  return (
    <div className='h-screen relative flex flex-col max-w-full justify-center items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
            Experience
        </h3>
        <motion.div
        initial={{
          opacity:0
        }}

        whileInView={{
          opacity:1
        }}

        viewport={{
          once:true
        }}
        transition={{
          duration:1
        }}
        
      

        className='flex flex-col justify-center items-center'
        >
          <Image src={errorImg} alt='error-pic' className='rounded-lg w-[80px] h-[80px] md:w-[100px] md:h-[100px]'/>
          <p className='text-gray-500 text-md md:text-lg xl:mb-10 px-5 py-2 text-center'>The section you're trying to visit is currently under maintanence. Please visit again in a few days.</p>
        </motion.div>
        <motion.div
        initial={{
          opacity:0
        }}

        whileInView={{
          opacity:1
        }}

        transition={{
          delay:2,
          duration:0.5
        }}
        viewport={{
          once:true
        }}
         className='text-sm md:text-md font-semibold text-center font-popping px-5'>
          <p>Optionally, you could speed up the process by hiring me.</p>
        </motion.div>
    </div>
  )
}

export default Experience