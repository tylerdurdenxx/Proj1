import { Link } from "react-router-dom";
import BannerImage from '../assets/banner2.jpg'
import '../styles/Home.css'
import { motion, useScroll } from "framer-motion"


export default function Home() {
  function Component() {
    const { scrollYProgress } = useScroll();
    
    return (
      <motion.div style={{ scaleX: scrollYProgress }} />  
    )
  }
  return (
    <motion.div 
      className="home" 
      style={{backgroundImage: `url(${BannerImage})`}}
      initial={{ width : 0 }}
      animate={{ width : "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.15 } }}
      >
      <div className="headerContainer">
        <motion.h1

        >Borgir Corner</motion.h1>
        <motion.p
          animate={{ fontSize: 30, color: '#808000', x: 100, y:-10 }}
          transition={{duration: 1}}
        >Unleash Your Inner Foodie :)</motion.p>
        
        <Link to="/menu">
          <motion.button
        whileHover={{ scale: 1.2, originX:0, boxShadow: "0px 0px 2px rgb(128,0,0)" }}
  
        >
          ORDER NOW
          </motion.button>
        </Link>
       
     
      </div>
    </motion.div>
  )
}