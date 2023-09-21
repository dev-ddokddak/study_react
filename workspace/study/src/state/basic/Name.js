import React, { useState } from 'react';

const Name = () => {
  const [name, setName] = useState('');

  const onInputChange = (event) => {
    setName(event.target.value);
  };

  const onInputSubmit = (event) => {
    setName(event.target.value);
  }
  

  return (
    <div>
      <div style={{height:'50px'}}>{name}</div>
      <input value={name} onChange={onInputChange} placeholder='이름 한번 적어보시든가'></input>
      <button onClick={onInputSubmit}>저장</button>
      <div>{onInputSubmit}</div>
      
    </div>
  );
};

export default Name;
