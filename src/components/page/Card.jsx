import React from 'react'
import styled from 'styled-components';
import styles from './card.module.css';
const CardLi =styled.li`
    display:flex;/* 이름 같은 것들 이미지 옆으로 보내기 */
    align-items:center;/* flex속성 사용할 수 있는 속 */
    width:100%;
    background-color:yellow;
    margin-bottom:0.5em;
    border-radius:1em;
    padding:0.2em 0;
    box-shadow:6px 6px 8px rgba(217,217,217,1);
    max-width:30em;/* 너비가 넓어질 수 있는 제약 */
`;
const AvatarImg=styled.img`
    width:10em;
    height:10em;
    padding:1em;
    border-radius:50%;
    margin-right:1em;
    margin-left:0.5em;/* 이미지 앞쪽 마진 */
`;
const NameH1=styled.h1`
    margin:0;
    font-size:1.2rem;
    margin-bottom:0.2em;
`
const CompanyP1=styled.p`
    margin:0;
    font-size:0.8rem;
    margin-bottom:0.2em;
`
const TitleP1=styled.p`
    margin:0;
    font-size:0.8rem;
    margin-bottom:0.2em;
`
const EmailP1=styled.p`
    margin:0;
    font-size:0.8rem;
    margin-bottom:0.2em;
`
const MessageP1=styled.p`
    margin:0;
    font-size:0.8rem;
    margin-bottom:0.2em;
`
const Card = ({card}) => {
    const DEFAULT_IMAGE='/images/default_logo.png'
    const{name,company,title,email,message,theme,fileName,fileURL}=card;
    const getStyles=(theme)=>{
        switch(theme){
            case'dark':
            return styles.dark;
            case'light':
            return styles.light;
             case'colorful':
            return styles.colorful;
            default:
                throw new Error(`unknown theme:${theme}`);

        }
    }//end of getStyles
    const url = fileURL||DEFAULT_IMAGE//fileURL이 있으면 url  없으면 DEFAULT
  return (
      <CardLi className={`${styles.card} ${getStyles(theme)}`}>
        <AvatarImg src={url} alt='profile image'/>
        <div className={{width:'100%'}}>
        <NameH1>{name}</NameH1>
        <CompanyP1>{company}</CompanyP1>
        <TitleP1>{title}</TitleP1>
        <EmailP1>{email}</EmailP1>
        <MessageP1>{message}</MessageP1>

        </div>
      </CardLi>
    
  )
}

export default Card
