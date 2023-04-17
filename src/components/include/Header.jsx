import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { logout } from '../../service/authLogic';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderDiv=styled.div`
    width:100%;
    text-align:center;
    background-color:#E8DFCA;
    padding:0.5em;
    position:relative;
`;
const Img=styled.img`
    width:3em;

`;
const BtnLogout=styled.button`
    position:absolute;
    right:3em;
    top:1em;
    padding:0.8em;
    border-radius:25%;

    border:0;
    cursor:pointer;
`;  
const Title=styled.h1`
    color:white;
`;
const Header = () => {
    const navigate = useNavigate()
    const {userAuth}=useSelector(store=>store)//변수명 무조건 store일 필요는 없다
    const[userId,setUserId]=useState()
    useEffect(()=>{
        setUserId(localStorage.getItem("userId"))
    },[])
    const onLogout=()=>{
        console.log(onLogout)//http 비상태 프로토콜 실제는 연결이 끊어져있는 상태
        console.log('onLogout')
        logout(userAuth.auth);
        navigate("/")
        window.location.reload()
    }
  return (
    <HeaderDiv>
      {userId&&<BtnLogout onClick={onLogout}>로그아웃</BtnLogout>}
      <Img src='images/logo.png'alt='logo'/>
      <Title>NameCard</Title>

    </HeaderDiv>
  )
}

export default Header
