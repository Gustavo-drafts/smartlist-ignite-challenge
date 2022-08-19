import styled from "styled-components";


export const FormStyle = styled.div`
  
  position: fixed;
  
  display: flex;
  flex-direction: row;
  align-items: center;


  /* margin-left: calc(105% - 1440px); */
  background: transparent;
  
  margin-top: -27px;
  gap: 8px;
`;

  export const InputStyle = styled.input`
  width: 39.875rem;
  height: 3.375rem;

  padding: 1rem;

  border: 1px solid var(--gray-700);
  border-radius: 8px;


  font-size: 1rem;
  background: var(--gray-500);
  color: var(--gray-200);
`;


export const BtnStyle = styled.button`

  width: 5.625rem;
  height: 3.25rem;

  gap: 0.5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  
  
  background: var(--blue-200);
  border-radius: 8px;

  transition: 0.2;

  :hover {
    background: var(--blue-100);
  }
`;