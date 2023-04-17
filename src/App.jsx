import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import CardManager from "./components/page/CardManager";
import styled from "styled-components";

const Appdiv=styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-item:center;
  background-color:#e8e7e6;
`

//route 화면전환 부분렌더링도 가능하게 하기위해
const App=({FileInput})=> {
  return (
    <>
      <Appdiv>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/manager" element={<CardManager FileInput={FileInput}/>}/>
        </Routes>
      </Appdiv>
    </>
  )
}

export default App;
