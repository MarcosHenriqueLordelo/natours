import styled from "styled-components";

// Assets
import nat4 from "../../assets/nat-4.jpg";

export const Container = styled.section`
  margin-top: -20vh;
  padding: 17rem;
  background-image: linear-gradient(
      to right bottom,
      ${(props) => `${props.theme.colors.main.lightGreen}d5`},
      ${(props) => `${props.theme.colors.main.darkGreen}d5`}
    ),
    url(${nat4});
  background-size: cover;

  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }

  @media (max-width: 900px) {
    margin-top: -10vh;
    padding: 10rem 30rem;
  }

  @media (max-width: 600px) {
    margin-top: -10vh;
    padding: 10rem 17rem;
  }
`;
