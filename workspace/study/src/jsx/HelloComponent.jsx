import React from 'react';

const hello = ({person}) => {
  return (
<div><h1>{person.name}님 환영합니다.
<br></br>{person.age}세시군요!
<br></br>{person.b}!!!
</h1></div>
  );
};

export default hello;