import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'

const Header = () => {


  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 bg-[rgb(36,36,36)]  xl:items-center p-5 '>
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
             url="https://www.linkedin.com/in/nagarjun-mohan-77300818b"
             fgColor='gray'
             bgColor='transparent'
             className='hover:scale-110'
              />
             <SocialIcon
             url="https://instagram.com/arjunpotter17"
             fgColor='gray'
             bgColor='transparent' 
             className='hover:scale-110'
              />
             <SocialIcon
             url="https://github.com/arjunpotter17"
             fgColor='gray'
             bgColor='transparent'
             className='hover:scale-110'
              />
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
            className='cursor-pointer hover:scale-110'
             url="mailto:arjunpotter17@gmail.com"
             fgColor='gray'
             bgColor='transparent'  
             
              />
             <p className='hidden md:inline-flex text-sm text-gray-200 font-popping'>Contact Me</p>
        
            
           
            
        </motion.div>
    </header>
  )
}

export default Header