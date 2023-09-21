import React, { useState } from 'react';

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [inputAmount, setInputAmount] = useState("");

  const handleAddAmount = () => {
    setBalance(prevBalance => prevBalance + Number(inputAmount));
    setInputAmount("");
  };

  const handleReset = () => {
    setBalance(0);
  };

  return (
    <div>
      <h1>현재 금액: {balance}원</h1>

      <input
        type="number"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
        placeholder="금액 입력"
      />

      <button onClick={handleAddAmount}>금액 추가</button>
      <button onClick={handleReset}>금액 초기화</button>
    </div>
  );
}

export default Balance;