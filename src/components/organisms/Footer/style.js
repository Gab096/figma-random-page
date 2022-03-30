import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  background: ${COLORS.BLUE};
  height: 15vh;
  display: flex;
  padding: 0 200px;
  justify-content: space-between;
  align-items: center;
  h5 {
    font-family: "Nexa";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #f0eeee;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h1 {
    font-family: "Nexa";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #f0eeee;
  }
`;
