import React from 'react';

const Amount = ({props, divStyle, pStyle}) => {
  console.log("자식(Amount) 랜더링")
  const {amount, coupon} = props;

  return (
    <div>
      {amount > 1 && <button>-</button>}
      <p>수량: {amount}</p>
      <button>+</button>
      {amount > 0 && <button>-</button>}
      <p>쿠폰: {coupon}</p>
      <button>+</button>
    </div>
  );
};

export default Amount;