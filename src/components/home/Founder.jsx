import React from 'react';
import {motion} from "framer-motion";
import me from "../../assests/Naman Pic.jpeg";

const options={
    initial:{
        x:"-100",
        opacity:0
    },
        whileInView:{
            x:0,
            opacity:1,
        }  ,
        transition:{delay:0.2}
}

const Founder = () => {
  return (
    <section className='founder'>
        <motion.div 
        {...options}>
            <img src={me} alt="Founder" height={200} width={200}/>
            <h3>Naman Rana</h3>
            <p>
                Hey babe, I am Naman Rana , and I am the founder of BTech Chail Wala.<br/>
                Our aim is to create the most tasty chai on this planet.
            </p>
        </motion.div>
    </section>
  )
}

export default Founder