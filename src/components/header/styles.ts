import styled, { keyframes } from "styled-components";

// Assets
import heroImg from "../../assets/hero.jpg";

const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translate(-100px);
  }

  80% {
    transform: translate(-10px);
  }

  100% {
    opacity: 1;
    transform: translate(0px);
  }
`;

const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translate(100px);
  }

  80% {
    transform: translate(10px);
  }

  100% {
    opacity: 1;
    transform: translate(0px);
  }
`;

export const Container = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      ${(props) => `${props.theme.colors.lightGreen}d5`},
      ${(props) => `${props.theme.colors.darkGreen}d5`}
    ),
    url(${heroImg});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
`;

export const LogoBox = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const Logo = styled.img`
  height: 45px;
`;

export const CenterContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LblHeader = styled.h1`
  color: ${(props) => props.theme.colors.font.white};
  text-transform: uppercase;
  backface-visibility: hidden;
`;

export const MainText = styled.span`
  font-size: 60px;
  font-weight: 400;
  letter-spacing: 45px;
  display: block;
  animation: 1s ${fadeInLeft} ease-out;
`;

export const SubText = styled.span`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 19.5px;
  display: block;
  animation: 1s ${fadeInRight} ease-in;
`;
