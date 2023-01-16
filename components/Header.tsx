import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
type Props = {}

export default function Header({}: Props) {
  return (
    <header className = "sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
            initial={{
                x:-350,
                opacity: 0,
                scale: 1,
            }}
            animate ={{
                x: 0,
                opacity: 1, 
                scale: 1,
            }}
            transition= {{ease:"easeOut", duration: 1.45}}


        className = "flex flex-row items-center">
            
            {/* Social Icons */}
            <SocialIcon url = "https://www.linkedin.com/in/ShivomSharma" 
                fgColor ="gray"
                bgColor ="transparent"
                
            
            />
                <SocialIcon url = "https://www.github.com/RealShivomSharma"
                fgColor ="gray"
                bgColor= "transparent"
            />
        </motion.div>
        <motion.div 
        initial = {{
            x: 300,
            opacity: 0
        }} 
        animate = {{
            x: 0,
            opacity: 1
        }}
        transition = {{ease:"easeOut", duration: 1.35}}
        
        className = "flex flex-row items-center text-gray-300 cursor-pointer">
            <SocialIcon
                className ="cursor-pointer"
                network ="email"
                fgColor ="gray"
                bgColor ="transparent"
            />
            {/* Formatting for the get in touch text, appears after the screen is no longer medium sized*/}
            <p className ="uppercase hidden md:inline-flex text-sm text-gray-400">
                Get in Touch
            </p>
        </motion.div>
    </header>
  )
}
