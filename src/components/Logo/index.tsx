import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo.svg"



export const LogoStyle = styled.img`
  background: transparent;
`;


export function Logo() {
  return (
    <LogoStyle src={logoImg} />
  )
}