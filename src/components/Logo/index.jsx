import styled from "styled-components";
import logo from "../../assets/logo.svg";


export const LogoStyle = styled.img`
  background: transparent;
  margin-top: 4.5rem;
`;


export function Logo() {
  return (
    <LogoStyle src={logo} />
  )
}