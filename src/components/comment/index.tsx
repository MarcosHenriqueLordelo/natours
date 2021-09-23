import React from "react";

import {
  Container,
  Content,
  Header,
  Shape,
  Body,
  Image,
  Caption,
} from "./styles";

interface PropTypes {
  image: string;
  header: string;
  body: string;
  name: string;
}

const Index: React.FC<PropTypes> = ({ image, header, body, name }) => {
  return (
    <Container>
      <Shape>
        <Image src={image} alt='comment' />
        <Caption>{name}</Caption>
      </Shape>
      <Content>
        <Header>{header}</Header>
        <Body>{body}</Body>
      </Content>
    </Container>
  );
};

export default Index;
