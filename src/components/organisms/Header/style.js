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
export const UlContainer = styled.ul`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 100px;
  li {
    font-family: "Abel";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 24px;
    transition: 0.4s;
    a {
      color: ${COLORS.BLACK};
      text-decoration: none;
      :hover {
        color: ${COLORS.BLUE};
      }
    }
  }
  [data-dropdown] {
    position: relative;
  }
  [data-dropdown] .dropdown-menu {
    display: none;
  }
  [data-dropdown]:hover .dropdown-menu {
    display: block;
  }
`;

export const AccordionUl = styled.ul`
  position: absolute;
  left: -80px;
  width: 200px;
  height: auto;
  color: #fff;
  background-color: #282828;
  display: none;

  li {
    padding: 20px;
  }
  li a {
    text-align: center;
    font-family: "Abel";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: ${COLORS.WHITE};
  }
  li a:hover {
    color: ${COLORS.BLUE};
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${COLORS.BLUE};
`;
