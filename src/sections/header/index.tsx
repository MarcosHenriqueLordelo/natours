import React from "react";
import { useTheme } from "styled-components";

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

// Components
import Button from "../../components/myButton";

const Index: React.FC = () => {
  const theme = useTheme();
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
        <Button
          label='Discorver our tours'
          backgroundColor={theme.colors.font.white}
          textColor={theme.colors.main.darkGreen}
          // href='#'
          animated
        />
      </CenterContent>
    </Container>
  );
};

export default Index;
