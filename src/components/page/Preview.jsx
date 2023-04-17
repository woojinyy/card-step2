import React from 'react'
import styled from 'styled-components'
import Card from './Card';

const PreviewDiv=styled.div`
    flex-basis:50%;
    
`;
const TitleH1=styled.h1`
    width:100%;
    text-align:center;
    margin-bottom:1em;

`;
//n건을 받아오기때문에 ul- li
const CardsUl=styled.ul`
    width:100%;
    height:100%;
    padding:0.5em 2em;
    display:flex;   /* 카드위치조정 */
    flex-direction:column;/* flex사용해야  align-items사용 가능 */
    align-items:center;  
`;
const Preview = ({cards}) => {
  return (
    <PreviewDiv>
        <TitleH1>CardPreview</TitleH1>
        <CardsUl>
            {
                Object.keys(cards).map((key)=>(
                    <Card key={key} card={cards[key]}></Card>
                ))
            }
        </CardsUl>
    </PreviewDiv>
  )
}

export default Preview
