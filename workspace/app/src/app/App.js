import React, { useState } from 'react';
import ResultContainer from './containers/ResultContainer';
import ItemContainer from './containers/ItemContainer';
import PopUpContainer from './containers/PopUpContainer';

const App = () => {
  const items = [
    {
      id: 1,
      content: "[헤라] 블랙 쿠션(리필포함) 17C1",
      price: "59,400원",
    },
    {
      id: 2,
      content: "[헤라] 블랙 쿠션(리필포함) 17N1",
      price: "59,400원",
    },
    {
      id: 3,
      content: "[헤라] 블랙 쿠션(리필포함) 21C1",
      price: "59,400원",
    },
    {
      id: 4,
      content: "[헤라] 블랙 쿠션(리필포함) 21N1",
      price: "59,400원",
    },
    {
      id: 5,
      content: "[헤라] 블랙 쿠션(리필포함) 23C1",
      price: "59,400원",
    },
    {
      id: 6,
      content: "[헤라] 블랙 쿠션(리필포함) 23N1",
      price: "59,400원",
    },
  ];

  const [showPopUp, setShowPopUp] = useState(false);
  const onClickToShowPopUp = () => {setShowPopUp(!showPopUp)};
  return (
    <div className="wrap">
      <PopUpContainer items={items} showPopUp={showPopUp} />
      <ItemContainer onClickToShowPopUp={onClickToShowPopUp}/>
      <ResultContainer />
    </div>
  );
};

export default App;