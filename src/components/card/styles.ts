import styled from "styled-components";

export const Container = styled.div`
  height: 50rem;

  --moz-perspective: 150rem;
  perspective: 150rem;

  position: relative;

  .cardSide {
    height: 50rem;
    width: 100%;

    padding: 0;
    border-radius: 0.4rem;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

    transition: all 0.8s ease;
    backface-visibility: hidden;

    position: absolute;
    top: 0;
    left: 0;

    &.front {
      background-color: ${(props) => props.theme.colors.font.white};
    }

    &.back {
      transform: rotateY(180deg);

      &.blue {
        background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.colors.main.lightBlue},
          ${(props) => props.theme.colors.main.darkBlue}
        );
      }

      &.orange {
        background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.colors.main.lightOrange},
          ${(props) => props.theme.colors.main.darkOrange}
        );
      }

      &.green {
        background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.colors.main.lightGreen},
          ${(props) => props.theme.colors.main.darkGreen}
        );
      }
    }
  }

  &:hover {
    .front {
      transform: rotateY(-180deg);
    }

    .back {
      transform: rotateY(0deg);
    }
  }
`;

export const CardSide = styled.div``;

interface ImageProps {
  src: string;
}

export const Image = styled.div<ImageProps>`
  height: 23rem;
  background-size: cover;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  &.blue {
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.main.lightBlue},
        ${(props) => props.theme.colors.main.darkBlue}
      ),
      url(${(props) => props.src});
  }

  &.orange {
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.main.lightOrange},
        ${(props) => props.theme.colors.main.darkOrange}
      ),
      url(${(props) => props.src});
  }

  &.green {
    background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.main.lightGreen},
        ${(props) => props.theme.colors.main.darkGreen}
      ),
      url(${(props) => props.src});
  }
`;

export const Header = styled.h4`
  text-transform: uppercase;
  font-size: 2.8rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.font.white};
  text-align: right;
  position: absolute;
  top: 14rem;
  right: 2rem;
  width: 70%;

  span {
    padding: 0.8rem;
    box-decoration-break: clone;

    &.orange {
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.main.lightOrange}b5,
        ${(props) => props.theme.colors.main.darkOrange}b5
      );
    }

    &.green {
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.main.lightGreen}b5,
        ${(props) => props.theme.colors.main.darkGreen}b5
      );
    }

    &.blue {
      background-image: linear-gradient(
        to right bottom,
        ${(props) => props.theme.colors.main.lightBlue}b5,
        ${(props) => props.theme.colors.main.darkBlue}b5
      );
    }
  }
`;

export const Content = styled.ul`
  padding: 3rem;
  list-style: none;
  width: 80%;
  margin: 0 auto;
`;

export const ContentItem = styled.li`
  font-size: 1.7rem;
  text-align: center;
  padding: 1rem 0 1rem 0;
  color: ${(props) => props.theme.colors.font.main};

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${(props) => props.theme.colors.font.light};
  }
`;

export const BackContent = styled.div`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const PriceBox = styled.div`
  color: ${(props) => props.theme.colors.font.white};
  margin-bottom: 8rem;

  .price {
    font-size: 6rem;
    font-weight: 100;
  }
  .label {
    font-size: 1.4rem;
    text-transform: uppercase;
  }
`;
