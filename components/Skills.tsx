import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial = {{ opacity: 0 }}
      whileInView = {{ opacity: 1 }}
      transition = {{ duration: 1.5 }}

      className = "flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className = "absolute top-24 uppercase tracking-[28px] text-gray-500 text-2xl">
      Skills
      </h3>
      <h4 className = "absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm z-20">Hover over a skill for current proficiency</h4>
      <div className = "grid grid-cols-4 gap-3 scale-55">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
      </motion.div>

      
      
  )
}

export default Skills