import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  margin-top: -0.5rem;
  overflow: hidden;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
