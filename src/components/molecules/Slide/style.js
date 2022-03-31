import styled from "styled-components";
import COLORS from "../../../common/colors";

export const Container = styled.div`
  height: 100vh;
  .react-slideshow-container + ul.indicators {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .react-slideshow-container + ul.indicators .active {
    color: #fff;
    background: ${COLORS.BLUE};
  }
`;
export const EachSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: fit-content;
  }
`;
export const TextContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  h1 {
    font-family: "Norwester";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    text-transform: uppercase;
    color: #020202;
  }
  P {
    font-family: "Nexa";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #020202;
  }
`;
export const Indicator = styled.div`
  position: relative;
  left: 98%;
  bottom: 250px;

  width: 15px;
  height: 15px;

  background: #ccc;
  border-radius: 50px;
`;
