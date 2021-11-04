import styled from "styled-components";

export const Container = styled.section`
  background-color: ${(props) => props.theme.colors.background.about};
  padding: 25rem 20rem 6rem 20rem;
  margin-top: -18rem;
  backface-visibility: hidden;

  @media (max-width: 900px) {
    padding: 30rem 30rem 6rem 30rem;
  }

  @media (max-width: 600px) {
    padding: 30rem 15rem 6rem 15rem;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`;
