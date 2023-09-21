import React, { useState } from "react";
import Items from "../components/Items";

const PopUpContainer = ({ items, showPopUp }) => {
  const [isEnter, setIsEnter] = useState(new Array(items.length).fill(false));
  const onMouseOverToEnter = (i = 0) => {
    isEnter.splice(i, 1, true);
    setIsEnter(isEnter.concat());
  };
  const onMouseOutToLeave = (i = 0) => {
    isEnter.splice(i, 1, false);
    setIsEnter(isEnter.concat());
  };

  return (
    <div
      className="pop-up"
      style={showPopUp ? { display: "block" } : { display: "none" }}
    >
      <Items
        items={items}
        isEnter={isEnter}
        onMouseOverToEnter={onMouseOverToEnter}
        onMouseOutToLeave={onMouseOutToLeave}
      />
    </div>
  );
};

export default PopUpContainer;
