import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 100vh;
  img {
    width: fit-content;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1 {
    font-size: 64px;
  }
  h4 {
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
export const ImgContainer = styled.div`
  .WL {
    position: absolute;
  }
`;
