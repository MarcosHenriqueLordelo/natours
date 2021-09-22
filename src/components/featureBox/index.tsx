import React from "react";

import { Container, Image, Title, Body } from "./styles";

interface PropTypes {
  title: string;
  body: string;
  image: string;
}

const Index: React.FC<PropTypes> = ({ title, body, image }) => {
  return (
    <Container>
      <Image src={image} alt='feature' />
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};

export default Index;
