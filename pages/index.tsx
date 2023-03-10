import Head from 'next/head'
import { Herr_Von_Muellerhoff, Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className = "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Shivom's Portfolio</title>
      </Head>

      {/* Header */}
      
      <Header />
      

      {/* Hero */}
      <section id="hero" className = "snap-start">
      
        <Hero />
      </section>
      {/* About */}
      <section id="about" className = "snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id = "experience" className = "snap-center">
        <Experience />
      </section>
        

      {/* Skills */}

      <section id = "skills" className = "snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id = "projects" className = "snap-start">
        <Projects />
      </section>

      <section id = "contact" className = "snap-start">
        <ContactMe />
      </section>

      {/* Contact Me */}
    </div>
  )
}
