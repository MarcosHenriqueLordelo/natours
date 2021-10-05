import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-left: 4.5rem;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fonts.sizes.medium};
  cursor: pointer;
  color: ${(props) => props.theme.colors.font.main};
`;

interface StyledInputProps {
  selected?: boolean;
}

export const StyledInput = styled.span<StyledInputProps>`
  height: 3rem;
  width: 3rem;
  border: 0.5rem solid ${(props) => props.theme.colors.main.lightGreen};
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: -0.4rem;

  &:after {
    content: "";
    display: block;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.main.lightGreen};
    opacity: ${(props) => (props.selected ? 1 : 0)};
    transition: opacity 0.2s;
  }
`;
