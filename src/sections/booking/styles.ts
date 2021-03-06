import styled from "styled-components";

import nat10 from "../../assets/nat-10.jpg";

export const Container = styled.section`
  margin-top: -1rem;
  padding: 15rem;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.colors.main.lightGreen},
    ${(props) => props.theme.colors.main.darkGreen}
  );

  @media (max-width: 900px) {
    padding: 15rem 0;
  }

  @media (max-width: 600px) {
    padding: 10rem 6rem;
  }
`;

export const Content = styled.div`
  height: 50rem;
  background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.9) 50%,
      transparent 50%
    ),
    url(${nat10});
  background-size: cover;
  border-radius: 0.3rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    background-image: linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 80%,
        transparent 80%
      ),
      url(${nat10});
  }
`;

export const FormContainer = styled.div`
  width: 90%;
  padding: 6rem;
`;

export const Form = styled.form`
  margin-top: 3rem;
`;

export const RadioGroup = styled.div`
  display: inline-block;
  width: 50%;
`;

export const Space = styled.div`
  height: 3rem;
`;
