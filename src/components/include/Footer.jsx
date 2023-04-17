import React from 'react'
import styled from 'styled-components'

const FooterDiv=styled.div`
    width:100%;
    background-color:#F8EDE3;
    text-align:center;
`
const TitleP= styled.p`
color:#D0B8A8
`
const Footer = () => {
  return (
    <FooterDiv>
      <TitleP>NpNg</TitleP>
    </FooterDiv>
  )
}


export default Footer
