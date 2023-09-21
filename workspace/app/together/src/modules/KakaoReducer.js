import { createAction, handleActions } from "redux-actions";

// action 경로 설정
const SET_ITEM_INFO = 'SET_ITEM_INFO';


// action 생성
export const setItemInfo = (items) => {
  return {
    type: SET_ITEM_INFO,
    payload: items,
  };
};
// state 초기값 설정
const initialState = {
  itemInfo: [],
};

// reducer 제작


const KakaoReducer = handleActions({
  [SET_ITEM_INFO]: (state, action) => ({ ...state, itemInfo: action.payload })
}, initialState);


export default KakaoReducer;

