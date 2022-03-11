import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export const AnimatedDiv = (props) => {


   return (
      <AnimatePresence>
         {(props.index !== props.removeIndex) &&
            <motion.div
               {...props}
               initial={{
                  opacity: 0,
                  height: 0,
                  transition: {
                     duration: props.duration ?? 0.75
                  }
               }}
               animate={{
                  opacity: 1,
                  height: 'inherit',
                  transition: {
                     duration: props.duration ?? 0.75
                  }
               }}
               exit={{
                  opacity: 0,
                  height: 0,
                  transition: {
                     duration: props.duration ?? 0.75
                  }
               }}
            >
               {props.children}
            </motion.div>
         }
      </AnimatePresence >
   )
} 