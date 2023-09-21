import React from "react";
import ListUlcomponent from "../component/ListUlcomponent";
import ActionIcon from "../component/ActionIcon";

const Temp = ({onImageSelect}) => {
  return (
    <div className="project-detail-information">
      <div className="floating-action-buttons">
        <strong className="floating-action-buttons-title-text">
          <ActionIcon />
          행동 인증
        </strong>
        <ul className="action-image-list">
          <ListUlcomponent onImageSelect={onImageSelect}/>
        </ul>
        <div className="floating-action-button-container">
          <button type="button" className="floating-action-button">
            행동하기
          </button>
          <div className="floating-end-button">종료</div>
          <div className="neulhajang-like-container">
            <button className="action-like-button">
              <div className="action-like-icon"></div>
              <span className="action-count-label">1</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;