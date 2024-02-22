
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
const TitleAnimation = () => {
const heroTitle = [
  "Web Developer", "Frontend Engineer", "Full Stack Engineer"
];
  
const [index, setIndex] = useState(0);

useEffect(() => {
  // const interval = setInterval(() => {
  //   setIndex((prevIndex) => (prevIndex + 1) % heroTitle.length);
  // }, 3000);
  // return () => clearInterval(interval);
  const id = setInterval(() => {
    setIndex((state) => {
      if (state >= heroTitle.length - 1) return 0;
      return state + 1
    })
  }, 2000)
}, [])

  return (
    <div className='relative'>
     { heroTitle.map((title, index) => (
      

        <motion.div
        className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] absolute"
        initial={{ y:20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        key={index}
        >
          {title}
        </motion.div>
         
      ))}
      </div>
      )
    }

export default TitleAnimation