import React, { useState }  from 'react';
// 강아지와 고양이 버튼을 누르면 각 울음소리가 출력되게 구현!
const Sounds = () => {


  const [Sounds, setSounds] = useState('멍냥');

  const onIncrease1 = () => {setSounds('멍멍')};
  const onIncrease2 = () => {setSounds('냐옹')};
  return (
    <div>
      <div style={{fontSize:'100px'}}>{Sounds}</div>
          <img src={process.env.PUBLIC_URL + 'images/dog.jpeg'} alt='강아지' onClick={onIncrease1} style={{width:'100px'}}></img>
          <img src={process.env.PUBLIC_URL + 'images/cat.jpg'} alt='고양이' onClick={onIncrease2} style={{width:'130px'}}></img>
    </div>
  );
};

export default Sounds;