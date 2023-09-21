import React from "react";
import { itemInfo } from "../itemInfo";

const ListUlcomponent = ({onImageSelect}) => {
  const handleImageClick = (image) => {
    onImageSelect(image);
  };
  return (
    <>
      {itemInfo.map((item) => (
        <li key={item.id} class="action-image-list-item">
          <button type="button" class="image-button-box" onClick={() => handleImageClick(item.image)}>
            <img
              src={item.image}
              class="action-participation-image"
            />
          </button>
        </li>
      ))}
    </>
  );
};

export default ListUlcomponent;