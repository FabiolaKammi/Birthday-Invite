import React from 'react';
import { motion } from "framer-motion"


const Footer = () => {
  const date = new Date();
  const year=date.getFullYear();
  return (
    <div className="footer-section">
      {/*<section>
        <ul className='about-me'>
        <li>About</li>
        <li>Project</li>
        <li>Resume</li>
      </ul>
      <ul className='contacts'>
        <li>Email</li>
        <li>Phone</li>
        <li>LinkedIn</li>
      </ul>
      <ul className='links'>
        <li>GitHub</li>
        <li>codeSanbox</li>
        <li>Website</li>
      </ul>
      </section>

      <ul className='media'>
          <motion.li animate={{ rotate: [0, 50, 50, 0], x: [0, 50, 50, 0, -50, -50, 0] }}>
        Instagram
      </motion.li>
      <motion.li>
        Facebook
      </motion.li>
      <motion.li>
        LinkedIn
      </motion.li>
      <motion.div animate={{ x: 100, scale: 1 }} initial={{ scale: -1 }}>
        {/* Add content here if needed
      </motion.div>  */}

      <ul className='media'>
        
        <li>©</li>
        <li>Copyright</li>
        <li>{year}</li>
      </ul>
        
      
    </div>
  )
}

export default Footer;
