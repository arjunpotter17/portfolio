import { motion } from 'framer-motion'
import React from 'react'
import EduCard from './EduCard'
import { school } from '../assets/school.jpg'
import { college } from '../assets/college.jpg'

const Education = () => {

    const education = [{
        school: 'Air Force School Hebbal',
        grade: '9.4 CGPA',
        standard: 'X GRADE',
        degree: 'General',
        id: '1'

    },
    {
        school: 'Air Force School Hebbal',
        grade: '83.6%',
        standard: 'XII GRADE',
        degree: 'Science',
        id: '2'

    },
    {
        school: 'Sir M. Visvesvaraya Institute of Technology',
        grade: [7.45, 6.78, 7.19, 7.65],
        overall: '7.23',
        standard: 'college',
        degree: 'Computer Science and Engineering',
        id: '3'

    }
    ]
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
            className='h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center'
            >
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Education
                </h3>
                <div className='w-full flex space-x-5 overflow-x-scroll scrollbar-hide::-webkit-scrollbar scrollbar-hide p-10 snap-x snap-mandatory'>
                    {education.map(phase => (<EduCard info={phase} key={phase.id} />))}
                </div>
        </motion.div>
    )
}

export default Education