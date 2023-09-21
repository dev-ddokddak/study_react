import React from 'react';
import BeComponent from './BeComponent';
import Error from './ErrorComponent';
import Hello from './HelloComponent';

const Jsx04 = () => {
  // undefined일 경우 JSX 내부에서는 값을 출력하지 않지만,
  // JSX 외부에서 사용될 경우 오류가 발생하므로
  // || 연산자를 사용하여 기본 값을 설정한다.
  // const name = undefined || "조현상";
  const login = true;
  const guest = true;
  const person = {
    name : '조현상',
    age : 20,
    gender : '남자',
    b : '멋지신분'
  }
  // const beComponent = (<div><h3>비회원으로 로그인되었습니다.</h3></div>)
  // const hello = (<div><h1>{name}님 환영합니다.</h1></div>)
  // const error2 = (<div><h1 style={{color:'red'}}>로그인 실패</h1></div>)
  const p1 = login && guest && <BeComponent />;
  const p2 = login ? <Hello person={person}/> : <Error />;

  // JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
  // 

  return (
    <div>
      <div>
        {p1}
        {p2}
      </div>
    </div>
  );
};

export default Jsx04;