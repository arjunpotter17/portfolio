import React from 'react'
import { motion } from 'framer-motion'
const BackGround = () => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}

            animate={{
                opacity: 1
            }}

            transition={{
                duration: 1.5
            }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute border border-lime-500 rounded-full md:h-[200px] md:w-[200px] sm:h-[150px] sm:w-[150px] mt-64 animate-ping'/>
            
        </motion.div>

    )
}

export default BackGround