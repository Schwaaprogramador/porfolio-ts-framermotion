//import React from 'react'
import { motion } from "framer-motion"
import styled from './Home.module.css'
import { GiBrain } from "react-icons/gi";

function Home() {
  return (
    <div className={styled.container}>
        
            <motion.h1 
            whileHover={{ scale: 2 }} 
            whileTap={{ scale: 3 }}
            drag
            dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
            }}>      
            <div className={styled.titulo}>Hola! mi nombre es Daniel Toro </div></motion.h1>

        
     

            
                <motion.div
                whileHover={{ scale: 2 }} 
                whileTap={{ scale: 3 }}
                ><GiBrain/><div className={styled.icon}></div></motion.div>
            
        
        

    </div>
  )
}

export default Home
