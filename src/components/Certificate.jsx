import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import fcc from '../assets/fcc.png';
import meta from '../assets/meta.png'

const Certificate = () => {
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left
    md:flex-row justify-center md:justify-evenly mx-auto items-center lg:py-11'>
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
        Certificates
      </h3>
      <div className='flex flex-col items-start justify-center max-h-[400px] w-[300px] md:w-[600px] lg:mt-24'>
        <motion.div
          initial={{
            x:-200,
            opacity:0
          }}

          whileInView={{
            x:0,
            opacity:1
          }}

          whileHover={{
            scale:1.1
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
          }}
         className='flex flex-row items-center m-2 border border-gray-600 p-3 rounded-lg hover:border-lime-300 w-[280px] md:w-full md:p-3'>
          <div className='bg-white rounded-lg p-2 w-[55px] h-[55px] m-2 mr-4 md:w-[85px] md:h-[85px]'>
            <Image src={fcc} className='w-full h-full object-contain' alt='fcc' />
          </div>
          <div className='flex flex-col justify-center items-start text-left'>
            <h4 className='font-popping font-semibold md:font-extrabold md:text-2xl text-sm'>Responsive Web Design</h4>
            <p className='text-gray-500 '>FreeCodeCamp</p>
            <p className='text-gray-500 '>Issued November 2,2022</p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x:0,
            opacity:0
          }}

          whileInView={{
            x:0,
            opacity:1
          }}

          whileHover={{
            scale:1.1
          }}

          transition={{
            duration:1.2
          }}

          viewport={{
            once:true
          }}
         className='flex flex-row items-center m-2 border border-gray-600 p-3 rounded-lg hover:border-lime-300 w-[280px] md:w-full md:p-3'>
          <div className='bg-white rounded-lg p-2 w-[55px] h-[55px] m-2 mr-4 md:w-[85px] md:h-[85px]'>
            <Image src={fcc} className='w-full h-full object-contain' alt='fcc'/>
          </div>
          <div className='flex flex-col justify-center items-start text-left'>
            <h4 className='font-popping font-semibold md:font-extrabold md:text-2xl text-sm '>JavaScript Algorithms and Data Structures</h4>
            <p className='text-gray-500 '>FreeCodeCamp</p>
            <p className='text-gray-500 '>Issued November 14,2022</p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            x:+200,
            opacity:0
          }}

          whileInView={{
            x:0,
            opacity:1
          }}

          whileHover={{
            scale:1.1
          }}

          transition={{
            duration:1
          }}

          viewport={{
            once:true
          }}
         className='flex flex-row items-center m-2 border border-gray-600 p-3 rounded-lg hover:border-lime-300 w-[280px] md:w-full md:p-3'>
          <div className='bg-white rounded-lg p-2 w-[55px] h-[55px] m-2 mr-4 md:w-[85px] md:h-[85px]'>
            <Image src={meta} className='w-full h-full object-contain' alt='meta' />
          </div>
          <div className='flex flex-col justify-center items-start text-left'>
            <h4 className='font-popping font-semibold md:font-extrabold md:text-2xl text-sm '>Frontend Developer Career Certificate</h4>
            <p className='text-gray-500 '>Meta(The Facebook Company)</p>
            <p className='text-gray-500 '>In Process</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Certificate