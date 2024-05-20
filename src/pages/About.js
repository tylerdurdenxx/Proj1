import Footer from '../assets/banner.jpg'
import '../styles/About.css'
import { motion, } from "framer-motion"

export default function About() {

  return (
    <motion.div 
    className="about"
    >
      <motion.div className="aboutTop" 
      style={{backgroundImage: `url(${Footer})`}}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{duration: 0.5}}
      >
      </motion.div>
      <motion.div className='aboutBottom'
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{duration: 0.8}}
      >
        <h1> ABOUT US </h1>
        <p>Welcome to our borgir corner, where passion and flavor collide! Our journey started with a deep love for creating mouthwatering burgers that are second to none. We take pride in using only the finest quality ingredients, sourced locally and sustainably whenever possible. Our mission is to deliver an exceptional dining experience, one juicy burger at a time. With a talented culinary team at the helm, we craft unique creations that tantalize your taste buds and leave you craving more. But it's not just about the food – our restaurant offers a warm and inviting atmosphere, perfect for enjoying a casual meal with family and friends. We believe in giving back to the community, and actively support local initiatives and charities. So come on in, savor our flavorful burgers, and immerse yourself in a burger experience like no other. We can't wait to serve you!</p>
    </motion.div>
      </motion.div>
     
  )
}