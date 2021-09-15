import React from "react";

import {
  Container,
  LogoBox,
  Logo,
  LblHeader,
  MainText,
  SubText,
  CenterContent,
} from "./styles";

// Assets
import logoW from "../../assets/logo-white.png";

const Index: React.FC = () => {
  return (
    <Container>
      <LogoBox>
        <Logo src={logoW} alt='logo' />
      </LogoBox>
      <CenterContent>
        <LblHeader>
          <MainText>Outdoors</MainText>
          <SubText>is where life happens</SubText>
        </LblHeader>
      </CenterContent>
    </Container>
  );
};

export default Index;
