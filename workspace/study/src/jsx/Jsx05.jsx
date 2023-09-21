import React from 'react';
import DadangComponent from './DadangComponent';
import MedadangComponent from './MedadangComponent';
import EntrnaceComponent from './EntrnaceComponent';
import NoentrnaceComponent from './NoentrnaceComponent';

const Jsx05 = () => {
  // undefined일 경우 JSX 내부에서는 값을 출력하지 않지만,
  // JSX 외부에서 사용될 경우 오류가 발생하므로
  // || 연산자를 사용하여 기본 값을 설정한다.
  const age = 22;
  // const name = '조현상';
  // const dang = {border:'4px solid blue', borderRadius:"15px"};
  // const medang = {border:'4px solid red', borderRadius:"15px"};

//   const entrnaceComponent =           (<div>
//   <h1><span style={{color:'green'}}>{name}</span>님 입장가능합니다.</h1>
// </div>)
  // const dadangComponent =                   (<div>
  // <h1><span style={dang}>당첨!!😁</span></h1>
  // </div>)
  // const medadangComponent = (<div>
  //   <h1><span style={medang}>미당첨🥲</span></h1>
  //   </div>)
  // JSX는 if문을 사용할 수 없기 때문에 삼항 연산자를 지원한다.
  // 조건식 ? 참일 때 랜더링할 JSX : 거짓일 때 랜더링할 JSX
  // 조건식 && 참일 때 랜더링할 JSX, 거짓이면 아무것도 출력되지 않음
  // &&연산자는 앞의 조건식이 false이면 뒤를 실행하지 않으며, false라는 값은 랜더링되지 않음.
  const medang = {border:'4px solid red', borderRadius:"15px"};
  const dang = {border:'4px solid blue', borderRadius:"15px"};
  return (
    <div>
      <div>
        {age > 19 ? (
          <>
          <EntrnaceComponent />
              <div>
                {age % 2 === 0 ?<DadangComponent dang={dang} />:<MedadangComponent medang={medang} />}
              </div>
              </>
        ):(
        <NoentrnaceComponent />
        )}
      </div>
    </div>
  );
};

export default Jsx05;