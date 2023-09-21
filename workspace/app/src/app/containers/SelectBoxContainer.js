import React from "react";
import SelectBox from "../components/SelectBox";
import ItemDetails from "../components/ItemDetails";

const SelectBoxContainer = ({onClickToShowPopUp}) => {
  return (
    <dd className="item-wrap">
      <div className="item-container" onClick={onClickToShowPopUp}>
        <SelectBox/>
        <ItemDetails />
      </div>
    </dd>
  );
};

export default SelectBoxContainer;
