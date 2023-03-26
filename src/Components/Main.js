import Profile from '../imgs/pic_png.png'
import { motion } from 'framer-motion'

const Main = () => {
  return (
        <main id="top">
        <div className='main-right-side'>
                <motion.div animate={{y: -10}} transition={{type: 'tween', duration: 1 }} className='cont-of-cont'>
                    <motion.div animate={{y: [10, -20, -20, 10]}} transition={{type: 'tween', duration: 5, repeat: Infinity}} className='image-container'>
                        <img className='main-img' src={Profile} alt="" />
                    </motion.div>
                </motion.div>
            </div>
            <div className='main-left-side'>
                <motion.div animate={{y: 50}} transition={{type: 'tween', duration: 1}} className='left-cont-of-cont'>
                    <h1 className='line1'>HELLO I'M</h1>
                    <motion.h1 animate={{x: 0}} initial={{x: -40}} transition={{type: 'tween', duration: 1}} className='line2'>NOUARI OUALID</motion.h1>
                    <p>Junior Front-end Developer</p>
                    <button>Download CV</button>
                </motion.div>
            </div>
        </main>
  )
}

export default Main