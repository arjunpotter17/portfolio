import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 '>
        <motion.div
            initial={{
                x:-200,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1
            }}
        >
            {/* Socials */}
            <SocialIcon
             url="https://linkedin.com/jaketrent"
             fgColor='gray'
             bgColor='transparent' />
             <SocialIcon
             url="https://instagram.com/jaketrent"
             fgColor='gray'
             bgColor='transparent' />
             <SocialIcon
             url="https://github.com/jaketrent"
             fgColor='gray'
             bgColor='transparent' />
        </motion.div>
        <motion.div
            initial={{
                x:200,
                opacity:0,
                scale:0.5,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1
            }}
        
             className='flex flex-row items-center text-gray-300 cursor-pointer'>
            {/* Contact */}
            
            <SocialIcon
            className='cursor-pointer'
             url="https://email/arjunpotter17@gmail.com"
             fgColor='gray'
             bgColor='transparent' />
             <p className='hidden md:inline-flex text-sm text-gray-200 font-popping'>Let's Connect</p>
           
            
        </motion.div>
    </header>
  )
}

export default Header