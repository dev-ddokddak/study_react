import { createAction, handleActions } from "redux-actions";

// action 경로 설정
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

// action 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state 초기값 설정
const initialState = {
  number: 0
}

// reducer 제작
const count = handleActions({
  // 분기 처리
  // action에 있는 payload에 전달받은 파라미터가 담긴다.
  [INCREASE]: (state, action) => ({number: state.number + 1}),
  [DECREASE]: (state, action) => ({number: state.number - 1})
}, initialState);

export default count;