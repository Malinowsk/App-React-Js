import React from "react";
import Item from "../Item";
import "./style.css";

const ItemList = ({items}) => {
  return (
    <div className='product-list-container'>
      {items.map((itm) => 
        {return(
          <div key={itm.id} className='card-container1'>     
            <Item producto={itm}/>
          </div>)
        })
      }
    </div>
  );
};

export default ItemList;