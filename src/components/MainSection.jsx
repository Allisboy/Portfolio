import React from 'react'
import image from '../assets/image.jpg'
import TextAnimation from './Textanimation'
import { motion } from 'framer-motion'
import TextChanger from './TextChanger'

const MainSection = () => {
  const handleResumeClick = () => {
    window.open('/ALLWELL.pdf', '_blank')
  }
  return (
    <main id="home" className="min-h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 mt-2">
            <TextAnimation text="Hi, I'm Allwell Oriso" />
            <TextChanger texts={[
              'Full Stack Web Developer',
              'App Developer',
              'Destop Application Developer'
              ]}/>
            <p className="text-sm mb-6 text-white">
              I'm a passionate web developer and app developer with a strong focus on creating amazing user experiences. With a strong foundation in web development and app development, I'm dedicated to crafting innovative and user-friendly solutions.
              Also making responsive websites to intuitive mobile applications.
            </p>
            <button 
            onClick={handleResumeClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              View Resume
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full">
              <img
                src={image}
                alt="Portfolio showcase"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"
              animate={{
                rotate: 360,
                x: [0, 120, 120, -120, -120, 0],
                y: [-120, -120, 120, 120, -120, -120],
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <i className="fab fa-react text-white"></i>
            </motion.div>
            <motion.div
              className="absolute w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center"
              animate={{
                rotate: 360,
                x: [120, 120, -120, -120, 0, 120],
                y: [-120, 120, 120, -120, -120, -120],
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <i className="fab fa-js text-white"></i>
            </motion.div>
            <motion.div
              className="absolute w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
              animate={{
                rotate: 360,
                x: [-120, -120, 0, 120, 120, -120],
                y: [120, -120, -120, -120, 120, 120],
              }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <i className="fab fa-php text-white"></i>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainSection
