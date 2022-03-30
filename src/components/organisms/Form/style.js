import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #f0eeee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Norwester";
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 86px;
    text-align: center;
    color: #4385f5;
  }
`;

export const Divider = styled.div`
  margin-top: 10px;
  margin-bottom: 100px;
  width: 10%;
  border-bottom: 4px solid #282828;
`;
export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  textarea {
    font-family: "Nexa";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #908f8f;
    background: #f0eeee;
    border: none;
    outline: none;
    border-bottom: 1px solid #717171;
    :focus {
      border-bottom: 1px solid #4385f5;
    }
  }
  > :last-child {
    align-items: center;
    justify-content: center;
    Button {
      padding: 30px 60px;
      font-size: 20px;
    }
  }
`;
export const FormHalfContainer = styled.form`
  display: flex;
  gap: 20px;
`;
