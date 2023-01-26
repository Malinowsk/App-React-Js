import React from "react";
import CartItem from "../CartItem";
import "./style.css";

const CartItemList = ({items}) => {
  return (
    <div className='product-list-container'>
      {items.map((itm) => 
        {return(
          <div key={itm.id} className='card-container1'>     
            <CartItem producto={itm}/>
          </div>)
        })
      }
    </div>
  );
};

export default CartItemList;