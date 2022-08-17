import React from "react";
import styled from "styled-components";


type LogoType = { 
  logo?: '../../assets/logo.svg';
}


export const LogoStyle = styled.img`
  background: transparent;
  margin-top: 4.5rem;
`;


export function Logo({logo}: LogoType) {
  return (
    <LogoStyle src={logo} />
  )
}