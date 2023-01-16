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
        src = "https://media.licdn.com/dms/image/D5603AQHvodM0huWEsg/profile-displayphoto-shrink_800_800/0/1669187755159?e=2147483647&v=beta&t=bPY4js-LrzHOry2Vzz4-61qbaFb6z57woAFojF-FLRE"
        />
    </div>
  )
}

export default about