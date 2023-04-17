import React from 'react'
import CardEditorForm from './CardEditorForm'
import CardAddForm from './CardAddForm'
import styled from 'styled-components'

const EditorDiv=styled.div`
    flex-basis:50%;
    border-right:1px solid #2C74B3;/* editor와 preview사이구분선넣기 */
    paddig:0.5em 2em;
    overflow-y:auto;
`;
const TitleH1=styled.h1`
    width:100%;
    text-align:center;
    margin-bottom:1em;
    color:#0A2647;

`;
const CardEditor = ({FileInput,cards,addCard,updatedCard,deleteCard}) => {//n번만큼 반복해야해
  console.log(cards)//3건출력 CardManager.jsx선언된 cards,  setCards
    return (
    <EditorDiv>
      <TitleH1>CardEditor</TitleH1>
        {Object.keys(cards).map(key=>(
          //cards3개 로우에 대해서 한 개 card정보만 전다해야한다
            <CardEditorForm FileInput={FileInput} key={key} card={cards[key]} updatedCard={updatedCard} />//대괄호 객체리터럴 해야하는 이유 라벨이 붙어있는 객체리터럴이기때문에
        ))
        }
        <CardAddForm FileInput={FileInput} addCard={addCard}/>
    </EditorDiv>
  )
}

export default CardEditor
