import { createAction, handleActions } from "redux-actions";

// action 경로 설정
const SETFONTSIZE = "fontSize/SET_FONTSIZE";

// action 생성
export const setFontSize = createAction(SETFONTSIZE);

// state 초기값 설정
const initialState = {
  fontSize: "1rem"
}

// reducer 제작
const fontSize = handleActions({
  [SETFONTSIZE]: (state, action) => ({fontSize: action.payload}),
}, initialState);

export default fontSize;