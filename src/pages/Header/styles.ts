import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['gray-600']};
  padding: 2.5rem 0 7.5rem;
  height: 20vh;
`;

export const HeaderContent = styled.div`
    text-align: center;
    background: transparent;

    img {
      background: transparent;
    }
`;