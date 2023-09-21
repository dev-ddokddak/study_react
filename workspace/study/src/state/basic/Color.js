import React,{useState} from 'react';

// 빨간색 버튼 누르면 글자색 파랗게
// 파란색 버튼 누르면 글자색 파랗게
// 핑크색 입력 시 글자색 핑크색으로
// 초기화 버튼을 눌러서 input태그에 입력한 문구 없애기


const Color = () => {
  const [color, setcolor] = useState('black');
  const [inputvalue, setinputvalue] = useState('');

  const onColorClick1 = () => {
    setcolor('red');
  };

  const onColorClick2 = () => {
    setcolor('blue');
  }

  const onInputChange = (event) => {
    if(event.target.value === '핑크색'){setcolor('pink')}
    setinputvalue(event.target.value)
  }

  const onResetClick = () => {
    setcolor('black');
    setinputvalue('');
  }

  return (
    <div>
      <span style={{color}}>즐거운 리액트~!</span><br/>
      <button onClick={onColorClick1}>빨간색</button>
      <button onClick={onColorClick2}>파란색</button>
      <input
        placeholder='핑크색 입력 해봐'
        onChange={onInputChange}
        value={inputvalue}

      ></input>
      <button onClick={onResetClick}>초기화</button>
    </div>
  );
};
export default Color;