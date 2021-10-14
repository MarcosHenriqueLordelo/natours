import styled from "styled-components";

export const Container = styled.footer`
  text-align: center;
  background-color: ${(props) => props.theme.colors.background.footer};
  padding: 5rem 0 2rem 0;
  font-size: ${(props) => props.theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.font.white};
`;

export const LogoBox = styled.div``;

export const Logo = styled.img`
  width: 15rem;
  margin-bottom: 3rem;
`;

export const List = styled.ul`
  display: inline-block;
  list-style: none;
  margin-bottom: 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.font.white};
  padding-top: 2rem;
`;

export const ListItem = styled.li`
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.background.footer};

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main.lightGreen};
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    transform: rotate(15deg) scale(1.1);
  }
`;

export const LabelCopyRight = styled.p``;
