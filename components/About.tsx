import React from 'react'
import {motion} from 'framer-motion'
import BackgroundAnims from './BackgroundAnims'
type Props = {}

function about({}: Props) {
  return (
    <motion.div 
    initial = {{
        opacity: 0
    }}
    whileInView={{ opacity: 1}}
    transition= {{ duration: 1.5 }}
    

    className = "flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className = "absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>

    
    
    <motion.img
        initial= {{
        x: -100, 
        scale: 0.6,
        opacity: 0 
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{
            x:0,
            opacity: 1
        }}
        src = "https://i.imgur.com/c8gN5AR.png"
        className = "-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg sm:w-64 sm:h-95 md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
    />
        <div className = "space-y-10 px-0 md:px-10">
            <h4 className = "text-4xl font-semibold"><span className ="underline">All About Me</span></h4>
        <p> My name is Shivom Sharma, and I am a Mechatronics & Management Engineering CO-OP Student with a strong passion for programming, designing and making things. 
        This webs
        This is a website that I created to demonstrate my knowledge of front-end development, while displaying some of my projects as well as other things I do in my free time.
        It was constructed primarily throught the usage of React and Tailwindcss.    
            
        
        </p>      
        </div>
        
    </motion.div>
  )
}

export default about