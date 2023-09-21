import React from "react";
import Item from "./Item";

const Items = ({ items, isEnter, onMouseOverToEnter, onMouseOutToLeave }) => {
  console.log("Items", isEnter);
  
  return (
    <ul>
      {items.map((item, index) => (
        <Item
          key={item.id}
          content={item.content}
          price={item.price}
          isEnter={isEnter[index]}
          onMouseOverToEnter={() => onMouseOverToEnter(index)}
          onMouseOutToLeave={() => onMouseOutToLeave(index)}
        />
      ))}
    </ul>
  );
};

export default Items;
