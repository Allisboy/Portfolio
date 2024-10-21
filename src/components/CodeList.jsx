
import React from 'react'
import { motion } from 'framer-motion'

const CodeList = () => {
    const languages = [
        { name: 'Java', image: '/images/java.png' },
        { name: 'JavaScript', image: '/images/js.png' },
        { name: 'TypeScript', image: '/images/ts.png' },
        { name: 'PHP', image: '/images/php.png' },
        { name: 'HTML', image: '/images/html.png' },
        { name: 'CSS', image: '/images/css.jpeg' },
    ]

    const frameworks = [
        { name: 'React', image: '/images/react.png' },
        { name: 'Laravel', image: '/images/laravel.png' },
        { name: 'Node.js', image: '/images/nodejs.png' },
        { name: 'Nextjs', image: '/images/nextjs.png' },
        { name: 'Javafx', image: '/images/javafx.jpeg' },
        { name: 'Three.js', image: '/images/threejs.png' },
        { name: 'Tailwind CSS', image: '/images/tailwind.jpeg' },
        { name: 'Framer Motion', image: '/images/motion.png' },
        { name: 'Gsap', image: '/images/gsap.jpeg' },
        { name: 'React Native', image: '/images/react-native.png' },
        { name: 'Nativephp', image: '/images/nativephp.jpg' },
    ]

    return (
        <div className="code-list p-2" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-800 p-4 rounded-lg shadow-lg"
            >
                <h2 className='mb-2 text-white text-lg '>Programming Languages</h2>
                <div className="flex flex-wrap justify-center gap-2 lg:p-5">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            className="flex gap-2 items-center border border-green-500 rounded-lg p-2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <motion.img 
                                src={lang.image} 
                                alt={lang.name} 
                                className="w-16 h-16 object-contain"
                                initial={{ opacity: 0, rotate: -180 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                            <p className="mt-2 text-center text-white">{lang.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className=' bg-gray-800 p-4 rounded-lg shadow-lg mt-4'
            >
                <h2 className='mb-2 text-white text-lg '>Frameworks and Libraries</h2>
                <div className="flex flex-wrap justify-center gap-2 lg:p-5">
                    {frameworks.map((framework, index) => (
                        <motion.div
                            key={framework.name}
                            className="flex flex-col items-center border border-green-500 rounded-lg p-2 "
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false}}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <motion.img 
                                src={framework.image} 
                                alt={framework.name} 
                                className="w-16 h-16 object-contain"
                                initial={{ opacity: 0, rotate: 180 }}
                                whileInView={{ opacity: 1, rotate: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            />
                            <p className="mt-2 text-center text-white">{framework.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
export default CodeList;