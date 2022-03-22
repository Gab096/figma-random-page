import styled from "styled-components";
import COLORS from "../../../common/colors/index";

export const CardButton = styled.div`
  width: 100%;
  display: flex;
  button {
    cursor: pointer;
    border: none;
    width: 100%;
    height: 48px;
    background: ${(props) =>
      props.background ? `${COLORS[props.background]}` : "none"};
    color: ${(props) =>
      props.color ? `${COLORS[props.color]}` : `${COLORS.WHITE}`};
  }
`;
