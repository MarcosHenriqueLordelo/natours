import styled, { keyframes } from "styled-components";

type containerProps = {
  backgroundColor?: string;
  textColor?: string;
  animated?: boolean;
};

const fadeInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.a<containerProps>`
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  display: inline-block;
  padding: 15px 40px;
  color: ${(props) => props.textColor || "#000000"};
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  animation: ${(props) => props.animated && fadeInBottom} 1.4s ease-out;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: ${(props) => props.backgroundColor || "transparent"};
    transition: all 0.4s;
  }

  &:hover:after {
    transform: scale(1.1);
  }
`;
