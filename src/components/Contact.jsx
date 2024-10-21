import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Contact = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button 
                className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setOpen(true)}
            >
                Contact me
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-gray-800 p-8 rounded-lg shadow-xl"
                        >
                            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                            <div>
                                <div className="flex items-center gap-2">
                                    <i className="fab fa-twitter"/>
                                    <a href='https://x.com/AllwellOriso'>on X</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="fab fa-facebook"/>
                                    <a href='https://www.facebook.com/profile.php?id=100090377755393'>on Facebook</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="fab fa-whatsapp"/>
                                    <span className='text-bold'>+2349045344216</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <i className="fas fa-envelope"/>
                                    <span className='text-bold'>allwellorisce@gmail.com</span>
                                </div>
                            </div>
                            {/* Add your contact form elements here */}
                            <button 
                                className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setOpen(false)}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
export default Contact;