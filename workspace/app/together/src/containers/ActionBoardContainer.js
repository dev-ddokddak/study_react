import React from "react";

const ActionBoardContainer = ({ selectedImages }) => {
  return (
    <>
      <div id="action-board" className="project-board-tab">
        <h5 className="authen-feed">
          <div role="text">
            행동 인증
            <span>5</span>
            <span>개</span>
          </div>
        </h5>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {selectedImages.map((image, index) => (
            <div
              key={index}
              className="action-image-wrap"
              style={{ width: "50%" }}
            >
              <div className="action-image-article">
                <div className="image_single">
                  <img src={image} />
                  <div className="authen-feed-like">
                    <div className="authen-feed-like-main">
                      <div className="authen-feed-like-selections">
                        <button className="authen-feed-like-selection">
                          <div
                            data-animation="BGSLIDE"
                            className="authen-feed-like-icon"
                          ></div>
                          <span className="authen-feed-like-count-label">
                            15
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="write-info-wrap">
                  <em color="#333" className="writer-wrap">
                    <span className="writer-nickname">작성자 아이디</span>샛별
                  </em>
                  <span color="gray60" className="name-time-style">
                    <span className="writer-nickname">작성 일자</span>
                    <span>3주일 전</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="more_action_list_button"></div>
      </div>
    </>
  );
};

export default ActionBoardContainer;
