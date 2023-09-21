import React, { useState, useContext } from "react";
import { AnimalProvider, AnimalConsumer } from "./AnimalContext";

const AnimalContainer = () => {
  const [newAnimal, setNewAnimal] = useState("");
  const { state, action } = useContext(AnimalConsumer);

  const AddAnimalButton = () => {
    if (newAnimal !== "") {
      action.insert(newAnimal);
      setNewAnimal("");
    }
  };



  return (
    <div>
      <h2>동물 목록</h2>
      {state.animals.map((animal, index) => (
        <button onClick={() => {action.remove(index)}}>
          {animal}
        </button>
      ))}
      <div>
        <input
          type="text"
          value={newAnimal}
          onChange={(e) => setNewAnimal(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              AddAnimalButton();
            }
          }}
        />
        <button onClick={AddAnimalButton}>추가</button>
      </div>
    </div>
  );
};


const App = () => {
  return (
    <AnimalProvider>
      <AnimalContainer />
    </AnimalProvider>
  );
};

export default App;