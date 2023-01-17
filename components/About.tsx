import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

function about({}: Props) {
  return (
    <div className = "flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
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
        />
        <motion.div className = "flex"> 
            Hello, my name is Shivom Sharma, I'm a Mechatronics & Management Engineering CO-OP Student at McMaster University. I have a strong passion for full-stack development, 
            
        </motion.div>
    </div>
  )
}

export default about