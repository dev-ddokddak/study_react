import React from 'react';
import FontSize from '../components/FontSize';

// # 1
// "재미있는 리덕스! 😂" 폰트 크기를 2rem으로 변경
// 기본 값은 1rem!

// # 2
// 사용자에게 입력받은 폰트 사이즈로
// "재미있는 리덕스! 😂" 폰트 크기 변경


const FontSizeContainer = () => {
  return (
    <div>
      <FontSize />
    </div>
  );
};

export default FontSizeContainer;