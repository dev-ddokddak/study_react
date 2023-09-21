import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize } from '../modules/FontSize';

const FontSize = () => {
  const fontSize = useSelector(state => state.fontSize);
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      dispatch(setFontSize(`${inputValue}rem`));
    }
  };

  return (
    <div>
      <p style={{ fontSize: fontSize }}>재미있는 리덕스! 😂</p>
      <button onClick={() => {dispatch(setFontSize("2rem"))}}>글자 키우기!</button>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown} 
      />
    </div>
  );
};

export default FontSize;