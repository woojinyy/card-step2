import { combineReducers } from "redux";
import  userAuth  from "./userAuth/reducer";
import  toastStatus  from "./toastStatus/reducer";

const rootReducer= combineReducers({//객체리터럴
    userAuth,//인증처리와 관련된 props이슈를  userAuth로 해결하기위해
    toastStatus,//메시지처리를 위한 관련된 코드
});

export default rootReducer;