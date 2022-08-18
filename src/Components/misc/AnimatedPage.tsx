import * as React from 'react';
import {motion} from 'framer-motion/dist/framer-motion';

const animations: any = {
    initial: {opacity: 0, transform: 'scale(0.975)'},
    animate: {opacity: 1, transform: 'scale(1)'},
    exit: {opacity: 0, transform: 'scale(0.975)'}
}

export default (({children}) => {
    return (
        <motion.div 
            className="inner" 
            variants={animations} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{duration: 0.4}}
        >
            {children}
        </motion.div>
    )
}) as AnimatedPageComponent;

interface props {
    children: React.ReactNode   
}
type AnimatedPageComponent = React.FC<props>;