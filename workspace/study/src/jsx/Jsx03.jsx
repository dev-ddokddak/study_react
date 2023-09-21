import React, { Fragment } from 'react';

const Jsx03 = () => {
  const n1 = "안녕 리액트!";
  const n2 = "난 너가 좋아!";

  return (
    // <Fragment>
    <>
      <h2>{n1} 😁</h2>
      <h2>{n2}</h2>
    </>
    // </Fragment>
  );
};

export default Jsx03;