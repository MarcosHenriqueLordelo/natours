import styled from "styled-components";

export default styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.main.lightGreen},
    ${(props) => props.theme.colors.main.darkGreen}
  );
  display: inline-block;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.02);
    text-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
  }
`;
