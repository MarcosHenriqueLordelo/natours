import styled from "styled-components";

export const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  input:placeholder-shown + label {
    opacity: 0;
    transform: translateY(-3.5rem);
  }

  input:invalid + label {
    color: ${(props) => props.theme.colors.main.darkOrange};
  }
`;

export const Input = styled.input`
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0.2rem;
  background-color: ${(props) => props.theme.colors.font.white};
  color: ${(props) => props.theme.colors.font.main};
  border: none;
  transition: all 0.2s;
  border-bottom: 0.3rem solid transparent;
  width: 80%;
  display: block;
  color: ${(props) => props.theme.colors.font.main};

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
    border-bottom: 0.3rem solid ${(props) => props.theme.colors.main.lightGreen};

    &:invalid {
      border-bottom: 0.3rem solid
        ${(props) => props.theme.colors.main.darkOrange};
    }
  }

  &focus &::placeholder {
    color: ${(props) => props.theme.colors.font.placeholder};
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.main.mediumGreen};
  font-weight: 700;
  margin-left: 2rem;
  margin-bottom: 0.3rem;
  transform: translateY(-7.5rem);
  transition: all 0.2s;
  display: block;
  cursor: text;
`;
