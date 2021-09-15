import styled from "styled-components";
import heroImg from "../../assets/hero.jpg";

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
`;
