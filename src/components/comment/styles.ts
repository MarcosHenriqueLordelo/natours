import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.colors.font.white}99;
  padding: 6rem;
  padding-left: 9rem;
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  transform: skewX(-12deg);

  & > * {
    transform: skewX(12deg);
  }

  &:hover {
    figcaption {
      opacity: 1;
      transform: translate(-50%, -50%);
    }

    img {
      transform: scale(1) translate(-4rem, -2rem);
      filter: blur(0.3rem) brightness(80%);
    }
  }

  @media (max-width: 600px) {
    transform: skewX(0deg);

    & > * {
      transform: skewX(0deg);
    }
  }
`;

export const Shape = styled.figure`
  width: 15rem;
  height: 15rem;
  float: left;
  background-color: aliceblue;
  shape-outside: circle(50% at center);
  clip-path: circle(50% at center);
  transform: translateX(-3rem) skewX(12deg);
  position: relative;

  @media (max-width: 600px) {
    transform: skewX(0deg) translate(1rem, -2rem);
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  height: 120%;
  transform: translate(-4rem, -2rem) scale(1.4);
  transition: all 0.5s;
`;

export const Caption = styled.figcaption`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  opacity: 0;
  color: ${(props) => props.theme.colors.font.white};
  font-size: ${(props) => props.theme.fonts.sizes.larger};
  text-align: center;
  transition: all 0.5s;
`;

export const Content = styled.div`
  color: ${(props) => props.theme.colors.font.main};

  @media (max-width: 600px) {
    display: inline-block;
  }
`;

export const Header = styled.h3`
  margin-bottom: 1.6rem;
`;

export const Body = styled.p``;
