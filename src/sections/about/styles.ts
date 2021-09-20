import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.background.about};
  padding: 25rem 19rem 0 19rem;
  //padding-bottom: 10rem;
  margin-top: -20rem;
  backface-visibility: hidden;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  text-align: center;
`;

export const Subheader = styled.h3`
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.font.main};
  margin-bottom: 1.5rem;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  color: ${(props) => props.theme.colors.font.main};

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const LearnMore = styled.a`
  color: ${(props) => props.theme.colors.lightGreen};
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  border-bottom: 0.2rem solid ${(props) => props.theme.colors.mediumGreen};
  padding: 0.6rem;
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  backface-visibility: hidden;

  &:hover {
    background-color: ${(props) => props.theme.colors.mediumGreen};
    color: ${(props) => props.theme.colors.font.white};
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
`;

export const ImagesContainer = styled.div`
  position: relative;

  img {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    // filter: drop-shadow(0 1.5rem 4rem rgba(0, 0, 0, 0.4));
    border-radius: 0.2rem;
    position: absolute;
    z-index: 0;
    transition: all 0.2s;

    &.p1 {
      left: 0;
      top: -2rem;
    }

    &.p2 {
      right: 0;
      top: 2rem;
    }

    &.p3 {
      left: 20%;
      top: 10rem;
    }

    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
      // filter: drop-shadow(0 2.5rem 4rem rgba(0, 0, 0, 0.4));
      z-index: 10;
    }
  }

  &:hover img:not(:hover) {
    transform: scale(0.95);
  }
`;
