import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Certificate from '@/components/Certificate'
import Link from 'next/link'
import footerImg from '../assets/footer-logo.jpg'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  


  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar scrollbar-track-gray-200/20 scrollbar-thumb-lime-300'>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
        <script defer src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <Header />
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id='education' className='snap-center'>
        <Education />
      </section>
      <section id='skills' className='snap-center'>
        <Skills />
      </section>
      <section id='projects' className='snap-center'>
        <Projects />
      </section>
      <section id='contact' className='snap-center'>
        <Contact />
      </section>
      <section id='certificate' className='snap-center'>
        <Certificate />
      </section>
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      <Link href='#hero'>
      <footer className='absolute bottom-16 md:right-11 md:bottom-8 right-5 md:grayscale hover:grayscale-0 z-10'>
        <Image src={footerImg} alt='home-btn' className=' rounded-full mx-auto object-cover w-[55px] h-[55px]'/>
      </footer>
      </Link>
      
    </div>
  )
}
