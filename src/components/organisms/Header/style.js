import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const LogoContainer = styled.div`
  width: auto;
  height: auto;
  padding: 40px;
  background: ${COLORS.BLUE};
  img {
    width: 100%;
  }
`;
export const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  gap: 44px;
  button {
    font-family: "Abel";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
    :hover {
      color: ${COLORS.BLUE};
    }
  }
`;
