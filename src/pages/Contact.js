import React from 'react'
import ContactPic from '../assets/b7.jpg'
import '../styles/Contact.css'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div 
    className='contact'
    >
      <motion.div className='leftSide'
      style={{ backgroundImage: `url(${ContactPic})`}}
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{duration: 0.4}}
      ></motion.div>
      <motion.div className='rightSide'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{duration: 0.8}}
      >
        <h1> Contact Us </h1>

        <form id="contact-form" method="POST">
          <label htmlFor='name'>Full Name</label>
          <input name='name' placeholder='Enter full name...' type="text"/>

          <label htmlFor='email'>Email</label>
          <input email='email' placeholder='Enter email...' type="email"/>

          <label htmlFor='message'>Message</label>
          <textarea 
          rows='6'
          placeholder='Enter message...'
          name='message'
          required
          ></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Contact
