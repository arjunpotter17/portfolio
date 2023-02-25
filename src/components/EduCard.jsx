import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import school from '../assets/school.jpg'
import college from '../assets/college.jpg'

const EduCard = ({info}) => {
  return (
    <article className='flex h-[400px] md:h-[370px] flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-[40px] xl:mt-20 border border-gray-600 md:border-none'>
        <div>
            <Image src={!Array.isArray(info.grade)?school:college} alt='school-pic' className='w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-fill xl:object-cover object-center '/>
        </div>

        <div className='flex flex-col justify-center items-center px-0 md:px-15 font-popping gap-3'>
            <h4 className='text-2xl md:text-4xl font-light text-lime-300'>{info.standard}</h4>
            <p className='font-bold text-center text-md md:text-2xl mt-1'>{info.school}</p>
            <p className='font-semibold text-center text-sm md:text-md'>{info.degree}</p>
            {info.overall?<p>Overall CGPA: <span className='text-lime-300'>{info.overall}</span></p>:''}
            {!Array.isArray(info.grade)?
            <p>{info.grade}</p>
            :
            <div className=' hidden lg:hidden md:flex md:flex-row md:justify-between md:gap-10'>{info.grade.map((grade,i) => (<p key={i}>Year {i+1}: {grade}</p>))}</div>
            
            }
            
        </div>
    </article>
  )
}

export default EduCard