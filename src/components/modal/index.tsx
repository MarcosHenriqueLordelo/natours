import React from "react";
import { useTheme } from "styled-components";

import {
  CloseButton,
  Container,
  Content,
  Image,
  ImagesContainer,
  InfoContainer,
  Paragraph,
  Space,
  SubHeader,
} from "./styles";

import img1 from "../../assets/nat-8.jpg";
import img2 from "../../assets/nat-9.jpg";

// Components
import HeaderLabel from "../headerLabel";
import MyButton from "../myButton";

interface PropTypes {
  open?: boolean;
  onClose: () => void;
}

const Index: React.FC<PropTypes> = ({ open, onClose }) => {
  const theme = useTheme();
  return (
    <Container open={open}>
      <Content open={open}>
        <ImagesContainer>
          <Image src={img1} alt='tour' />
          <Image src={img2} alt='tour' />
        </ImagesContainer>
        <InfoContainer>
          <HeaderLabel>Start booking now</HeaderLabel>
          <Space />
          <SubHeader>
            Important &ndash; Please read this terms before booking
          </SubHeader>
          <Space />
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            mattis enim ut tellus elementum sagittis. In egestas erat imperdiet
            sed euismod. Ante in nibh mauris cursus mattis molestie a. Lectus
            nulla at volutpat diam ut venenatis tellus in metus. Suspendisse sed
            nisi lacus sed viverra tellus. Fermentum dui faucibus in ornare
            quam. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
            Cursus mattis molestie a iaculis at erat pellentesque. Nam aliquam
            sem et tortor consequat id porta. Dictum non consectetur a erat nam
            at. Viverra accumsan in nisl nisi scelerisque. Habitant morbi
            tristique senectus et. Maecenas pharetra convallis posuere morbi
            leo. Ac placerat vestibulum lectus mauris. Ligula ullamcorper
            malesuada proin libero nunc consequat. Ut aliquam purus sit amet
            luctus. Praesent elementum facilisis leo vel fringilla. Egestas
            pretium aenean pharetra magna ac placerat. Blandit cursus risus at
            ultrices mi tempus.
          </Paragraph>
          <MyButton
            label='Book Now'
            backgroundColor={theme.colors.main.lightGreen}
            textColor={theme.colors.font.white}
          />

          <CloseButton onClick={onClose}>&times;</CloseButton>
        </InfoContainer>
      </Content>
    </Container>
  );
};

export default Index;
