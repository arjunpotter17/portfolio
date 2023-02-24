import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href=`mailto:arjunpotter17@gmail.com?subject=${data.subject}&body=Hello, my name is ${data.name}, phone number ${data.phone}, email ${data.email}. ${data.message}`
  };


      
  
  return (
    
    <div className='h-screen relative snap-mandatory flex flex-col items-center justify-center text-center overflow-hidden max-w-full mx-auto z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10'>
        Contact
      </h3>

      <div className='flex w-[300px] md:w-[500px] md:gap-16 mt-36 md:mt-0 flex-col gap-11 lg:gap-0 items-center lg:mt-44'>
        <div className='flex flex-col items-center justify-center'>

          <h4 className='text-xl md:text-2xl xl:text-4xl font-popping font-semibold'>I can build exactly what you need.
            <br />
            <span className='uppercase tracking-widest text-lime-300'>Let us talk</span>
          </h4>
          <div className='flex gap-3 items-center justify-center font-popping'>
            <EnvelopeIcon className='w-[24px] h-[24px] text-lime-300' />
            <p className='text-md md:text-lg tracking-wider'>arjunpotter17@gmail.com</p>
          </div>

          <div className='flex gap-3 items-center justify-center font-popping'>
            <PhoneIcon className='w-[30px] h-[30px] text-lime-300' />
            <p className='text-md md:text-l tracking-wider'>+91-8105022685</p>
          </div>

        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center w-full gap-2 pb-7'>
          <h5 className='text-lg md:text-2xl font-popping font-semibold'>
            Leave me a message!
          </h5>
          <div className='flex gap-1'>
            <input type="text" placeholder='Name' required {...register('name')} className='bg-transparent border border-gray-600 rounded-lg p-2 hover:border-lime-300 focus:border-lime-300 w-6/12' />
            <input type="tel" {...register('phone')} maxLength={10} placeholder='Phone' required className='bg-transparent border border-gray-600 rounded-lg p-2 hover:border-lime-300 focus:border-lime-300 w-6/12' />
          </div>
          <input type="email" {...register('email')} placeholder='E-mail' required className='bg-transparent border border-gray-600 rounded-lg p-2 hover:border-lime-300 focus:border-lime-300' />
          <input type="text" {...register('subject')} placeholder='Subject' required className='bg-transparent border border-gray-600 rounded-lg p-2 hover:border-lime-300 focus:border-lime-300' />
          <textarea placeholder='Message' {...register('message')} required  className='bg-transparent border border-gray-600 rounded-lg p-2 hover:border-lime-300 focus:border-lime-300' />
          <button className='border border-gray-600 rounded-md hover:bg-lime-400 hover:text-black max-w-[100px] max-h-[100px] p-3 self-center'>Submit</button>
        </form>

      </div>

    </div>
  )
}

export default Contact