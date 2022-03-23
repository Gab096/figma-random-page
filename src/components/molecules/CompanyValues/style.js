import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
export const ImgContainer = styled.div`
  width: 65px;
  height: 65px;
  background: ${COLORS.BLUE};
  padding: 10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 43px;
    color: #000000;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
`;
