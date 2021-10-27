import styled from "styled-components";

interface ModalProps {
  open?: boolean;
}

export const Container = styled.div<ModalProps>`
  width: 100vw;
  height: 100vh;
  z-index: 100;

  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);

  transition: all 0.2s;

  ${({ open }) => !open && `opacity: 0; visibility: hidden;`}
`;

export const Content = styled.div<ModalProps>`
  width: 75%;
  background-color: ${({ theme }) => theme.colors.font.white};
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  padding: 0;

  position: absolute;
  top: 50%;
  left: 50%;

  transition: all 0.2s;
  transform: translate(-50%, -50%) scale(1);
  ${({ open }) =>
    !open && `opacity: 0; transform: translate(-50%, -50%) scale(0.5);`}

  display: table;
  overflow: hidden;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.font.main};
  line-height: 1;
  padding: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.main.lightGreen};
  }
`;

export const ImagesContainer = styled.div`
  width: 33.33333%;
  padding: 0;
  display: table-cell;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
`;

export const InfoContainer = styled.div`
  width: 66.6666667%;
  padding: 3rem 5rem;
  display: table-cell;
  vertical-align: middle;
`;

export const SubHeader = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  color: ${({ theme }) => theme.colors.font.main};
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  color: ${({ theme }) => theme.colors.font.main};

  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid ${({ theme }) => theme.colors.font.light};

  margin-bottom: 4rem;
  hyphens: auto;
`;

export const Space = styled.div`
  height: 3rem;
`;
