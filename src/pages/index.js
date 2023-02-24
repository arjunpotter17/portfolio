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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0'>

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
    </div>
  )
}
