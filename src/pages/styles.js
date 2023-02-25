import React from 'react'
import Link from 'next/link'

const Styles = () => {
    return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen'>
            <div className='h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
                    Styles
                </h3>
                <div className='w-[320px]  md:w-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lime-300 p-10 snap-x snap-mandatory z-20 '>
                    <div className=' flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
                        <div className='flex justify-between'>
                            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[10px] text-md md:tracking-[20px] md:text-xl  '>chatgpt</h4>
                            <Link href='https://design-project-1.vercel.app'>
                                <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
                            </Link></div>
                        <hr className='bg-lime-300' />
                        <p className='text-justify text-sm md:text-xl'>
                            This is a mock website made to showcase ChatGpt and its features. Through this demonstration I learnt to apply CSS to create responsive websites and also the BEM (Block, ELement, Modifier) naming convention.
                        </p>
                    </div>

                    <div className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
                        <div className='flex justify-between'>
                            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[10px] text-md md:tracking-[20px] md:text-xl '>Gericht</h4>
                            <Link href='https://design-project-2.vercel.app'>
                                <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
                            </Link>
                        </div>
                        <hr className='bg-lime-300' />

                        <p className='text-justify text-sm md:text-xl'>
                            This is a mock website created for a german restaurant Gericht.
                        </p>



                    </div>

                    <div className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
                        <div className='flex justify-between'>
                            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[10px] text-md md:tracking-[20px] md:text-xl '>HooBank</h4>
                            <Link href='https://design-project-3.vercel.app'>
                                <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
                            </Link></div>
                        <hr className='bg-lime-300' />
                        <p className='text-justify text-sm md:text-xl'>
                        This is a mock website made to showcase the features of a modern banking/payment system. Through this demonstration I learnt to apply CSS to create responsive websites and gained experience with the Tailwind.css framework.
                        </p>
                    </div>

                </div>
            </div>

            <div className='w-full absolute top-[30%] bg-lime-300/10 left-0 h-[400px] -skew-y-12 z-0' />
        </div>

    )
}

export default Styles