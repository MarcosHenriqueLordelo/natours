import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(225, 225, 225, 0.8);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 0.3rem;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.colors.font.main};
  transition: all 0.3s;
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`;

export const Image = styled.img`
  width: 8rem;
  margin-bottom: 4rem;
`;

export const Title = styled.h3`
  text-transform: capitalize;
  margin-bottom: 2rem;
`;

export const Body = styled.p`
  font-weight: 400;
  letter-spacing: 0.15rem;
`;
