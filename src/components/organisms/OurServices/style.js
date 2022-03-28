import styled from "styled-components";
import COLORS from "../../../common/colors";

export const ContainerSection = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${COLORS.BLUE};
`;

export const ServicesIconContainer = styled.div`
  img {
    width: 30%;
    height: 33%;
    position: absolute;
    z-index: auto;
    left: 0;
  }
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 38px;
  margin-top: 81px;

  h2 {
    font-family: "Norwester";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    color: #ffffff;
  }
  P {
    width: 50%;
    font-family: "Nexa";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
  }
`;
export const ServicesCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;

  margin-top: 60px;
  gap: 50px;
`;
