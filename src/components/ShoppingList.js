import React,{useState} from "react";
import Item from "./Item";

function ShoppingList(props) {
  const allitms=props.items
  let [items,setItems]=useState(props.items)

  const handleCategory=(e)=>{
    let category=e.target.value
    console.log(allitms)
    items=[...allitms]
    console.log(items)
    const newItems=items.filter((itm)=>itm.category===category)
    setItems(newItems)
    console.log(newItems)
  
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
