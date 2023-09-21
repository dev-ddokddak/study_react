import React from 'react';

const Product = () => {
  console.log("부모(Product) 랜더링")
  const divStyle = {
    border: '1px',
  };
  const pStyle = {};
  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState(0);
  

  return (
    <div>
      <p>[책] 배워서 바로 써먹는 리액트</p>
      <button>좋아요 {like}</button>
    </div>
  );
};

export default Product;