import React, { useState } from "react";

import {
  Background,
  Button,
  ButtonIcon,
  Container,
  List,
  ListItem,
  ListNum,
  Navigation,
} from "./styles";

const Index: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Background open={open} />
      <Button onClick={() => setOpen(!open)}>
        <ButtonIcon open={open} />
      </Button>
      <Navigation open={open}>
        <List>
          <ListItem>
            <ListNum>01</ListNum>About Natours
          </ListItem>
          <ListItem>
            <ListNum>02</ListNum>Your Benefits
          </ListItem>
          <ListItem>
            <ListNum>03</ListNum>Popular Tours
          </ListItem>
          <ListItem>
            <ListNum>04</ListNum>Stories
          </ListItem>
          <ListItem>
            <ListNum>05</ListNum>Book Now
          </ListItem>
        </List>
      </Navigation>
    </Container>
  );
};

export default Index;
