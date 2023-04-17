//action 에서 사용되는 타입 선언
export const SET_MSG='TOAST_STATUS/SET_MSG'
export const SET_FALSE='TOAST_STATUS/SET_FALSE'

//Action을 dispatch를 통해서 store에 전달할 때 호출되는 함수
//이것이 reducer에 전달되면 switch문에서 변화
export const setToastMsg=(msg)=>{//메시지가 들어와야  상태값이 false에서 true로 바뀌는 컨셉
    return{
        type:SET_MSG,
        msg:msg,
        bool:true,
    }
}

export const setToastFalse=()=>{
    return{
        type:SET_FALSE,
        msg:"",
        bool:false,
    }
}