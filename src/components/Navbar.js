import Logo from '../assets/blogo2.png'
import ReorderIcon from '@mui/icons-material/Reorder';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { motion } from "framer-motion"


function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <motion.div className="navbar"
    initial={{ y: -250 }}
    animate={{ y: 0}}
    transition={{ delay: 0.2, type: 'spring', stiffness: 500 }}
    >
      <div 
      className="leftSide" 
      id={openLinks ? "open" : "close"}
      whileHover={{ scale: 1.1, rotate: -180, }}
      transition={{ duration: 0.3 }}
      >

        <motion.div 
        className='logo'
        drag
        whileHover={{ scale: 1.1 }}
        initial={{ y: -250 }}
        animate={{ y: 0}}
        transition={{ delay: 0.1, type: 'spring', stiffness: 700 }}
        
        >
         <img src={Logo} />
        </motion.div>
      
        <motion.div 
        className="hiddenLinks"
        >
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </motion.div>
      </div>
      <div 
      className="rightSide"
      >

      <motion.div whileHover={{ scale: 1.2 }} 
            animate={{ y: 0}}
            initial={{ y: -250 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 400 }}>
            <Link to="/">Home</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            animate={{ y: 0}}
            initial={{ y: -250 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}>
            <Link to="/menu">Menu</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            animate={{ y: 0}}
            initial={{ y: -250 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}>
            <Link to="/about">About</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}
            animate={{ y: 0}}
            initial={{ y: -250 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 500 }}>
            <Link to="/contact">Contact</Link>
          </motion.div>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </motion.div>
  );
}

export default Navbar;