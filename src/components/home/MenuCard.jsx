import React from 'react';
import {motion} from "framer-motion";

const MenuCard = ({itemNum,burgerSrc,price,title,handler,delay=0}) => {
  return (
    <motion.div
    className='menuCard'
    initial={{opacity: 0,
    x:"-100%"}}
    whileInView={{opacity: 1,
    x:0}}

    transition={{
      delay
   } }
    >
    <div>
        Item {itemNum}
    </div>

    <main>
        <img src={burgerSrc} alt={itemNum}/>

        <h5>{price}</h5>

        <p>{title}</p>

        <button onClick={()=>handler(itemNum)}>Buy Now</button>
    </main>

    </motion.div>
  )
}

export default MenuCard;