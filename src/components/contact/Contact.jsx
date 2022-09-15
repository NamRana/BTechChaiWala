import React from 'react';
import {motion} from "framer-motion";
import burger from "../../assests/burger2.png"

const Contact = () => {
  return (
    <section className='contact'>
    <motion.form
    initial={{
        x:"-100vw",
        opacity:0,
    }}
    animate={{
        x:0,
    opacity:1,    }}
        transition={{delay:0.2}}
    >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email" name="" id="/"></input>

        <textarea placeholder='Message...' cols="30" rows="10"></textarea>
        <button type="submit">Send Message</button>
    </motion.form>

    <motion.div className='FormBorder'
    initial={{
        x:"100vw",
        opacity:0,
    }}
    animate={{
        x:0,
    opacity:1,    }}
        transition={{delay:0.2}}
    >
    <motion.div initial={{
        y:"-100vh",
        x:"50%",
        opacity:0,
    }}
    animate={{
        y:"-50%",
        x:"50%",
    opacity:1,    }}
        transition={{delay:0.6}}
    
    >
        <img src={burger} alt="Burger"/>
    </motion.div>
    </motion.div>
    </section>
  )
}

export default Contact