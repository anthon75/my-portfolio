import React from 'react'
import HeroHeading from './HeroHeading';
import { RiGithubLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col mb-20">     
      <HeroHeading 
        greeting="Hi, I'm"
        name="Anthony"
        description="Full-Stack Developer crafting exceptional digital experiences with modern technologies"
      />
      <div className='flex justify-center -mt-10'>
      <RiGithubLine className="text-4xl text-gray-500 bg-blue-200 hover:bg-blue-800" />
      <RiLinkedinLine className="text-4xl text-gray-500 bg-blue-200 hover:bg-blue-800" />
      <CgMail className="text-4xl text-gray-500 bg-blue-200 hover:bg-blue-800" />
      </div>
      <FiArrowDown className="text-4xl text-gray-500 bg-blue-200 hover:bg-blue-800 mx-auto mt-5 animate-bounce" />
    </div>
  )
}


export default Hero

