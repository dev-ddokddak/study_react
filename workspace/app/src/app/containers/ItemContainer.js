import React from "react";
import SelectBoxContainer from "./SelectBoxContainer";

const ItemContainer = ({onClickToShowPopUp}) => {
  const title = (<dt className="container-title">상품 선택</dt>);
  return (
    <dl className="container">
      {title}
      <SelectBoxContainer onClickToShowPopUp={onClickToShowPopUp} />
    </dl>
  );
};

export default ItemContainer;
