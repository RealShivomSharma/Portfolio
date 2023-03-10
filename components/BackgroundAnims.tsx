import React from 'react'
import { motion } from "framer-motion"
type Props = {}

function BackgroundAnims({}: Props) {
  return (

    <motion.div 
    initial = {{
      opacity: 0,
      
      
    }}
    animate = {{
      scale:[1,2,2,3,2],
      opacity:[0.1,0.2,0.4,0.8,0.1,0.3]
      
    }}
    transition = {{
      duration:10
      
    }}
    
    className = "relative flex justify-center items-center">

        <div className ="absolute border border-gray-500 rounded-full opacity-40 h-[200px] w-[200px] mt-52 animate-ping bg-blend-luminosity" />
        <div className ="absolute border  border-black-500 opacity-20 rounded-full border-dashed h-[400px] w-[400px] mt-52 animate-pulse" />
        
    </motion.div>
  )
}

export default BackgroundAnims