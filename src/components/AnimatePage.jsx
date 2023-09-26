import {motion} from 'framer-motion';

const animations ={
  initial: {opacity:0, x:1000},
  animate:{opacity:1, x:0},
  exit:{opacity:0, x: 1000},
}

const AnimatePage = ({children})=>{
  return(
    <motion.div
    variants={animations}
    initial='initial'
    animate='animate'
    
    transition={{duration: 0.4}}

    >
      {children}
    </motion.div>
  )
}
export default AnimatePage;