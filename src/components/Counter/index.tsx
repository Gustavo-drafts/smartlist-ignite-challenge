import React from "react";
import styled from "styled-components"

export const DivStyle = styled.div`

width: 46.875rem;

padding-bottom: 0.5rem;
border-bottom: solid 1px var(--gray-400);

display: flex;
justify-content: space-between;

strong {
  color: var(--gray-300)
}

strong span {
  width: 1.5rem;

  padding: 0 10px 0 10px;
  margin-left: 0.2rem;

  border-radius: 16px;  
  
  background: var(--gray-400);
}
`;

interface CounterProps {
  done: number;
  created: number;
}

export function Counter({ done = 0, created = 0}: CounterProps) {



  return (
    <DivStyle>
      <strong>
        Tarefas criadas
        <span>{created}</span>
      </strong>
      <strong>
        Concluídas
        <span>{done}</span>
      </strong>
    </DivStyle>
  )
}