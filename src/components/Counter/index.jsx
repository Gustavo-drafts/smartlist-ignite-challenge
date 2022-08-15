import styled from "styled-components"

export const DivStyle = styled.div`

width: 46.875rem;

padding: 0.5rem;
margin-top: 5rem;
margin-left: calc(105% - 1440px);

display: flex;
justify-content: space-between;
`;

export function Counter() {
  return (
    <DivStyle>
      <strong>
        Tarefas criadas
        0
      </strong>
      <strong>
        Concluídas
        0
      </strong>
    </DivStyle>
  )
}