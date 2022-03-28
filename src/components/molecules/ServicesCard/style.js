import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 10px;
  width: 25%;
  border: 2px solid #282828;

  padding: 20px 10px 60px 10px;
  img {
    background: #282828;
    border-radius: 50px;
    padding: 10px;
    width: 50px;
    height: 50px;
  }
  h4 {
    font-family: "Norwester";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
  p {
    font-family: "Nexa";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
`;
