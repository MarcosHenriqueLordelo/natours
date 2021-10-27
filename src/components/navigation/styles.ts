import styled from "styled-components";

interface NavProps {
  open?: boolean;
}

export const Container = styled.div``;

export const Button = styled.div`
  position: fixed;
  right: 4rem;
  top: 4rem;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.font.white};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  z-index: 30;

  &:active {
    transform: translateY(3px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonIcon = styled.span<NavProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &,
  &::after,
  &::before {
    padding: 0;
    height: 2px;
    width: 3rem;
    background-color: ${({ theme }) => theme.colors.font.main};
    display: inline;
  }

  &::after,
  &::before {
    content: "";
    position: absolute;
    left: 0;
    transition: all 0.5s;
  }

  &::before {
    top: -1rem;
  }
  &::after {
    top: 1rem;
  }

  ${({ open }) =>
    open &&
    `
    &{
      background-color: transparent;
    }
    &::before {
      top: 0;
      transform: rotate(135deg)
    }
    &::after {
      top: 0;
      transform: rotate(-135deg)
    }
  `}
`;

export const Background = styled.div<NavProps>`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  position: fixed;
  right: 4rem;
  top: 4rem;
  background-image: radial-gradient(
    ${({ theme }) => theme.colors.main.lightGreen},
    ${({ theme }) => theme.colors.main.darkGreen}
  );
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.12, 0, 0.39, 0);
  ${({ open }) => open && `transform: scale(80)`}
`;

export const Navigation = styled.nav<NavProps>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  transition: all 0.6s cubic-bezier(0.12, 0, 0.39, 0);

  ${({ open }) => !open && `opacity: 0; width: 0;`}
`;

export const List = styled.ul`
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fonts.sizes.larger};
  color: ${({ theme }) => theme.colors.font.white};
  font-weight: 300;
  text-transform: uppercase;
  padding: 1rem 2rem;
  cursor: pointer;
  background-size: 220%;
  transition: all 0.4s;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${({ theme }) => theme.colors.font.white} 50%
  );

  &:hover {
    background-position: 100%;
    color: ${({ theme }) => theme.colors.main.lightGreen};
    transform: translateX(1rem);
  }
`;

export const ListNum = styled.span`
  margin-right: 1rem;
`;
