import React from 'react'
import BackGround from './BackGround';
import Image from 'next/image';
import { motion } from 'framer-motion'
import profileImage from '../assets/smile.jpg'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link'
const Hero = () => {

    const [text, count] = useTypewriter({
        words: ["The Name's Arjun", 'StackOverFlow expert', 'Professional copy-paster', 'Absolute goofball'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
            <BackGround />
            <motion.div
                initial={{
                    opacity:0
                }}

                animate={{
                    opacity:1
                }}

                transition={{
                    duration:1.5
                }}
            >
                <Image
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={profileImage} alt='profile-pic' className=' rounded-full mx-auto object-cover w-[200px] h-[200px] mb-5' />
            </motion.div>

            <div className='z-20 flex flex-col gap-4'>
                <h2 className='md:text-sm text-[18px] uppercase text-gray-500 pb-2 tracking-[12px]'>Frontend Dev</h2>
                <h1>
                    <span className='text-[#bdbdbc] md:text-[17px] text-[20px] font-serif'>
                        {text}
                    </span>
                    <Cursor cursorColor='#fff' />
                </h1>
                <div>
                    <Link href='#about'>
                    <button className='herobutton font-popping'>About</button>
                    </Link>

                    <Link href='#education'>
                    <button className='herobutton font-popping'>Education</button>
                    </Link>

                    <Link href='#skills'>
                    <button className='herobutton font-popping'>Skills</button>
                    </Link>

                    <Link href='#projects'>
                    <button className='herobutton font-popping'>Projects</button>
                    </Link>

                    <Link href='#certificate'>
                    <button className='herobutton font-popping'>Certificates</button>
                    </Link>

                    <Link href='#experience'>
                    <button className='herobutton font-popping'>Experience</button>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Hero