import React from "react";

import {
  Container,
  LogoBox,
  Logo,
  List,
  ListItem,
  LabelCopyRight,
} from "./styles";

// Assets
import LogoImg from "../../assets/logo-green-2x.png";

const Index: React.FC = () => {
  return (
    <Container>
      <LogoBox>
        <Logo src={LogoImg} alt='Full logo' />
      </LogoBox>
      <List>
        <ListItem>Company</ListItem>
        <ListItem>Contact Us</ListItem>
        <ListItem>Carrers</ListItem>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Terms</ListItem>
      </List>
      <LabelCopyRight>
        &copy;{` 2022 - ${new Date().getFullYear() + 1}`}
      </LabelCopyRight>
      <LabelCopyRight>Build by - Marcos Marques</LabelCopyRight>
      <LabelCopyRight>Designed by - Jonas Schmedtmann</LabelCopyRight>
    </Container>
  );
};

export default Index;
