import styled from "styled-components";
import COLORS from "../../../common/colors";

export const CardInput = styled.div`
  width: 50%;
  display: flex;
  input {
    width: 100%;
    height: 48px;
    padding-left: 10px;
    border: 2px solid ${COLORS.BLACK};
    :focus {
      outline: none;
      border: solid 2px ${COLORS.BLUE};
    }
  }
`;
