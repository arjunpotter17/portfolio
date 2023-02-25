import React from 'react'
import Link from 'next/link'


const Projects = () => {

  return (
    <div className='h-screen flex relative overflow-hidden flex-col md:flex-row text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
        Projects
      </h3>
      <div className='w-[320px]  md:w-full flex space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lime-300 p-10 snap-x snap-mandatory z-20 '>
        <div className=' flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
          <div className='flex justify-between'>
            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[20px] text-xl'>Games</h4>
            <Link href='https://games-snowy-five.vercel.app/'>
              <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
            </Link>
          </div>
          <hr className='bg-lime-300' />
          <p className='text-justify text-sm md:text-xl'>
            These games are made entirely using basic HTML, CSS, and JavaScript.
            I made these games to improve my command over JavaScript and learn use case scenarios of the data
            structures available. I did not pay much heed to the styling since my focus was entirely on the functioning of
            these games. Have fun playing!
          </p>
        </div>

        <div className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
          <div className='flex justify-between'>
            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[10px] text-md md:tracking-[20px] md:text-xl '>Headliners</h4>
            <Link href='/headliners'>
              <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
            </Link>
          </div>
          <hr className='bg-lime-300' />

          <p className='text-justify text-sm md:text-xl'>
            This section consists of the best projects in this portfolio. Each of these are meant to be standalone applications, but are
            bought together to showcase react expertise. Apart from react, certain projects use other softwares like tailwind.css, Next.js, sanity.io, API fetch
            using rapidAPI and much more. Enjoy the experience!
          </p>



        </div>

        <div className='flex flex-col rounded-lg space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-transparent p-5 mt-12 xl:mt-20'>
          <div className='flex justify-between'>
            <h4 className='text-gray-500 flex flex-col justify-evenly items-center uppercase tracking-[20px] text-xl '>Styles</h4>
            <Link href='/styles'>
              <button className='bg-black text-lime-300 p-3 rounded-lg uppercase tracking-wider hover:bg-lime-300 hover:text-black'>go</button>
            </Link></div>
          <hr className='bg-lime-300' />
          <p className='text-justify text-sm md:text-xl'>
            I always had a bug for the aesthete. Designing the look and feel of a website is very interesting. This section includes projects that I built, to learn
            the process behind designing a website. Please keep in mind that since these projects are meant to be web design showcases, they are not functional
            in any manner whatsover. Dive right in!
          </p>
        </div>

      </div>
      <div className='w-full absolute top-[30%] bg-lime-300/10 left-0 h-[400px] -skew-y-12 z-0' />


    </div>
  )
}

export default Projects