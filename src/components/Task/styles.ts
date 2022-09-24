import styled from "styled-components";

export const TaskContainer = styled.div`  
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  width: 736px;
  height: 42px;
  background: #262626;

  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
`;

export const TaskCheckContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  width: 700px;
  

  div {
    width: 100%;
    height: 100%;
    border: 2px solid #4EA8DE;
    border-radius: 50%;
  }
`;

export const TaskButton = styled.button`

.titleCompleted {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    color: #808080;
    text-decoration: line-through;
  } 

.title {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

    color: #F2F2F2;
  }
`;

export const TaskButtonDelete = styled.button`
  border: none;
  background: none;
  outline: none;
`;

