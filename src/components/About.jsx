import { motion } from 'framer-motion'
import React from 'react'
import img from '../assets/look-down.jpg'
import Image from 'next/image'

const About = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}

            whileInView={{
                opacity: 1
            }}

            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
            className='h-screen flex flex-col relative text-center md:text-left
            justify-center md:justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[24px] text-gray-500 text-2xl'>About </h3>

            <motion.div
                initial={{

                    opacity: 0
                }}
                whileInView={{

                    opacity: 1
                }}
                transition={{
                    duration: 1
                }}
                viewport={{
                    once: true
                }}
                className='lg:mt-32'
            >
                <Image src={img} alt='profile-pic' className='mt-28 md:mt-5 mb-4 md:mb-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-md md:object-contain md:w-60 md:h-60' />
            </motion.div>

            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                    scale: 0.5,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                viewport={{
                    once:true
                }}
                className='space-y-5 px-0 md:px-10'>
                <h4 className='lg:text-4xl text-xl font-semibold font-popping'>A <span className='text-lime-300'>little</span> background</h4>
                <p className='font-popping px-10 text-justify text-xs md:text-xl lg:text-sm md:tracking-wide'>
                Hello my name is Arjun! I am a 24 year old front-end developer. I graduated from Sir M. Visvesvaraya Institute of Technology, Bengaluru with a Bachelor degree in computer science in 2020.
                It has been a year since I have started practising in this field.
                For the past six months I have immersed myself into building this portfolio and all the projects associated with it. Although my path may be unorthodox (I have a very interesting backstory), I assure you
                    that my learning ability is not. Please go through this portfolio and be a judge yourself. Happy viewing!
                </p>


            </motion.div>






        </motion.div>
    )
}

export default About