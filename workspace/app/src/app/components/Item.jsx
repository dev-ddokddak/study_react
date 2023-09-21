// Item 컴포넌트
import React from "react";

const Item = ({ isEnter, onMouseOverToEnter, onMouseOutToLeave, content, price }) => {
  console.log("Item", isEnter);
  return (
    <li
      className={isEnter ? "enter" : "leave"}
      onMouseEnter={onMouseOverToEnter}
      onMouseLeave={onMouseOutToLeave}
    >
      <div className="select">
        <p className="select-content">
          <span>{content}</span>
        </p>
        <div className="select-price">
          <div>{price}</div>
        </div>
      </div>
    </li>
  );
};

export default Item;
