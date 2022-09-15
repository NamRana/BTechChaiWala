import React from 'react';
import MenuCard from './MenuCard';
import burger1 from "../../assests/burger1.png";
import burger2 from "../../assests/burger2.png";
import burger3 from "../../assests/burger3.png";
const Menu = () => {
    const addToCartHandler= (itemNum) => {}
  return (
    <section id="menu">
    <h1>Menu</h1>
    <div>
        <MenuCard itemNum={1}
         burgerSrc={burger1} 
         price={200} 
         title="Cheese Burger" 
        handler={addToCartHandler}
        delay={0.1}
        /> 
        <MenuCard itemNum={2}
         burgerSrc={burger2} 
         price={500} 
         title="Veg Cheese Burger" 
        handler={addToCartHandler}
        delay={0.5}
        />
        <MenuCard itemNum={3}
         burgerSrc={burger3} 
         price={800} 
         title="Cheese Burger with fries" 
        handler={addToCartHandler}
        delay={0.7}
        />
        </div>
    </section>
  )
}

export default Menu