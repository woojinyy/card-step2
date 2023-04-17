import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../include/Header'
import Footer from '../include/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToastMsg } from '../../redux/toastStatus/action'
import { loginGoogle } from '../../service/authLogic'
const LoginDiv=styled.div`
    width:30em;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Ul=styled.ul`
    list-style: none;
    width:100%;
    display:flex;
    flex-direction:column;
    padding:0.5rem;
`;
const Li=styled.li`
    margin-bottom:0.5em;

`;
const BtnLogin=styled.button`
    width:100%;
    background-color:#A9907E;
    margin-botton:0.5em;
    height:2.5em;
    border-radius:1.2rem;
    cursor:pointer;
    border:0.2rem solid #7895B2;
    outline:0;
    &hober{
        background-color:#F3DEBA;
    }
`;

const Login = () => {
    //로그인 성공시 CardManager화면으로 넘어가기
    const navigate=useNavigate()

    //실패시 에러메세지 출력
    const dispatch=useDispatch()
    //auth, googleProvider파라미터로 전송
    const [userId,setUserId] =useState()
    //로그인 성공  uid localstorage담을 stateHook선언
    //userAuth가 뭘 갖고있어
    const userAuth = useSelector(store=>store.userAuth)
    const onLogin=async()=>{
        try {
            const result= await loginGoogle(userAuth.auth, userAuth.googleProvider)
            console.log(result)
            console.log(result.uid)
            setUserId(result.uid)
            window.localStorage.setItem("userId",result.uid)
            navigate({
              pathname:"/manager",
              state:{id:result.uid},//navigate으로 넘길때 상태값도 같이 넘기기위해서
            })
            window.location.reload();
        } catch (error) {
            dispatch(setToastMsg(error+":로그인오류입니다."))
        }
    }
  return (
    <LoginDiv>
      <Header/>
      <section>
        <h1>Login</h1>
      </section>
        <Ul >
            <Li><BtnLogin onClick={onLogin}>Google로그인</BtnLogin></Li>
            <Li><BtnLogin>Github로그인</BtnLogin></Li>
        </Ul>
      <Footer/>
    </LoginDiv>
  )
}

export default Login
