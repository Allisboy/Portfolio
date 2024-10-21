
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextChanger = ({texts=['']}) => {
  // const texts = ['Developer', 'Designer', 'Creator', 'Innovator'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 flex items-center">
      <AnimatePresence mode="wait">
        <h1 className='text-pink-500 mt-3 text-xl'>
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 4 }}
            className="text-3xl font-bold "
          >
            {texts[currentIndex]}
          </motion.span>
        </h1>
      </AnimatePresence>
    </div>
  );
};

export default TextChanger;
