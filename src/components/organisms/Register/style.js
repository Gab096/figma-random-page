import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 80%;
  img {
    width: 50%;
  }
`;
export const FormContainer = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 64px;
  }
  h4 {
    margin-left: 16%;
    font-size: 32px;
  }
`;

export const Form = styled.form`
  margin-top: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  input {
    width: 100%;
  }
  div {
    display: flex;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 48px;
      font-size: 18px;
    }
  }
`;
