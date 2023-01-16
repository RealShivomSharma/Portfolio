import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundAnims from './BackgroundAnims'
import Link from "next/link"
type Props = {}

function Hero({}: Props) {
    const [text,count] = useTypewriter({
        words: [
            "Shivom Sharma", 
            "McMaster University", 
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className = "h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundAnims />
        <img className = "relative rounded-full h-64 w-64 mx-auto object-cover " src ="https://media.licdn.com/dms/image/D5603AQHvodM0huWEsg/profile-displayphoto-shrink_800_800/0/1669187755159?e=2147483647&v=beta&t=bPY4js-LrzHOry2Vzz4-61qbaFb6z57woAFojF-FLRE"/>
        <div className ="z-20">

        
        <h2 className = "text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Mechatronics & Management CO-OP Student
        </h2>
        
        <h1 className = "text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span className = "mr-3">{text}</span>
            <Cursor cursorColor = "#FF0000" />
        </h1>
        <div className = "pt-5">
            <Link href = "#about">
                <button className = "heroButton">About</button>
            </Link>
            <Link href = "#experience">
                <button className = "heroButton">Experience</button>
            </Link>
            <Link href = "#skills">
                <button className = "heroButton">Skills</button>
            </Link>
            <Link href = "#projects">
                <button className = "heroButton">Projects</button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Hero