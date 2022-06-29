import React ,{useState}from "react";

function Item({ name, category }) {
  const [addedToCart,setAddedToCart]=useState(false)
  const [addText,setAddtext]=useState("Add to Cart")
  const handleCartStatus =()=>{
    if(addText==='Add to Cart'){
      setAddtext("Remove From Cart")
      setAddedToCart(true)
    }else{
      setAddtext("Add to Cart")
      setAddedToCart(false)
    }
  }


  


  return (
    <li className={addedToCart?"in-cart":null
  }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartStatus}>{addText}</button>
    </li>
  );
}

export default Item;
