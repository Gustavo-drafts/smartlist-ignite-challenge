import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const AppTitle = styled.h1`
   font-size: 4em;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.theme['purple-200']};

  ::before {
    content: "";
      width: 100%;
      height: 200px;
      background-color: #0D0D0D; 
      display: block;

      position: absolute;
      top: 0;
      left:0;
      z-index: -1;
  }
`;


export const AppFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  top: 12px;

input {
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 16px;

  width: 638px;
  height: 52px;

  background: #262626;
  border: 1px solid #0D0D0D;
  border-radius: 8px;
  line-height: 140%;
  font-family: 'Inter';
  color: #808080;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 90px;
  height: 52px;

  background: #1E6F9F;
  border-radius: 8px;
  border: none;

  font-family: 'Inter';
  font-weight: 700;
  font-size: 14px;
  color: #F2F2F2;
}
`;


export const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const TasksCount = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 480px;

span {
  background-color: #333333;
  margin-left: 8px;
  padding: 2px 8px;
  width: 25px;
  height: 19px;   
  border-radius: 10px;
  color: #D9D9D9
}

h4:nth-child(1) {
  color: #4EA8DE
}

h4:nth-child(2) {
  color: #5E60CE
}
`;