import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import redux from '../assets/redux.png'
import sanity from '../assets/sanity.svg'
import next from '../assets/nextjs-icon.png'
import figma from '../assets/figma.png'

const Skills = () => {
  return (
    <motion.div className='h-screen flex flex-shrink-0 relative flex-col gap-10 text-center md:text-left xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
            Skills
        </h3>
        <div className='grid grid-cols-3 gap-5 mt-5 lg:mt-20'>
            <Skill value={'html'}  name={html}/>
            <Skill value={'css'} name={css}/>
            <Skill value={'javascript'} name={javascript}/>
            <Skill direction={'left'} value={'react'} name={react}/>
            <Skill direction={'left'} value={'redux'} name={redux}/>
            <Skill direction={'left'} value={'github'} name={github}/>
            <Skill  value={'node.js'} name={node}/>
            <Skill  value={'sanity.io'} name={sanity}/>
            <Skill  value={'next.js'} name={next}/>
            <Skill  value={'Figma'} name={figma}/>
        </div>
        
    </motion.div>
  )
}

export default Skills