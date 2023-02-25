import React from 'react'
import Link from 'next/link'

const Headliners = () => {
    return (
        <div className='bg-[rgb(36,36,36)] text-white h-screen'>
            <div className='h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
                    Headliners
                </h3>
                <div className='w-[320px]  md:w-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lime-300 p-10 snap-x snap-mandatory z-20 '>
        <div className=' flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
          <div className='flex justify-between'>
            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[20px] text-xl '>Mytube</h4>
            <Link href='https://mytube-three.vercel.app'>
              <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
            </Link>
          </div>
          <hr className='bg-lime-300' />
          <p className='text-justify text-sm md:text-xl'>
            The first big React.js application I worked on. Mytube is a simple youtube clone, which fetches data through an API and displays it in a layout very similar to youtube. 
          </p>
        </div>

        <div className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
          <div className='flex justify-between'>
            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[20px] text-xl '>Elec</h4>
            <Link href='https://elec-xi.vercel.app'>
              <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
            </Link>
          </div>
          <hr className='bg-lime-300' />

          <p className='text-justify text-sm md:text-xl'>
            Elec is an e-commerce store dedicated to electronic products. This is a fullstack application made with the help of Next.js and Sanity.io.
          </p>



        </div>

        <div className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
          <div className='flex justify-between'>
            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[20px] text-xl '>ShareMe</h4>
            <Link href='https://share-me-site.vercel.app'>
              <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
            </Link>
          </div>
          <hr className='bg-lime-300' />
          <p className='text-justify text-sm md:text-xl'>
            Share Me is a social-media application, where users share pictures with their friends. This too was made fullstack with the help of Sanity.io.
          </p>
        </div>

      </div>
            </div>
            
            <div className='w-full absolute top-[30%] bg-lime-300/10 left-0 h-[400px] -skew-y-12 z-0' />
        </div>

    )
}

export default Headliners