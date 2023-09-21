import React, { useState } from "react";
import Temp from "./containers/Temp";
import ActionBoardContainer from "./containers/ActionBoardContainer";

const App = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const addImage = (image) => {
    setSelectedImages(prevImages => [...prevImages, image]);
  };
  return (
    <div>
      <Temp onImageSelect={addImage}/>
      <ActionBoardContainer selectedImages={selectedImages} setSelectedImages={setSelectedImages}/>
    </div>
  );
};

export default App;