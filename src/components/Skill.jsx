import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Skill = ({direction,value, name}) => {

    
  return (
    <motion.div
        initial={{
            x:direction?0:0,
            opacity:0
        }}

        whileInView={{
            x:0,
            opacity:1
        }}
        transition={{
            duration:2
        }}
        viewport={{
            once:true
        }}
        className='group relative flex cursor-pointer w-20 h-20 '
    >
        <Image src={name}  alt='skill-logo' className='rounded-full border border-gray-500 object-contain w-full h-full'/>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 rounded-full'>
            <div className='flex h-full items-center justify-center'>
            <p className='text-md font-bold text-black opacity-100'>{value}</p>
            </div>
            
        </div>
    </motion.div>
  )
}

export default Skill