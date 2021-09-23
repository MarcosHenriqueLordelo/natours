import React from "react";

// Components
import HeaderLabel from "../../components/headerLabel";
import { Row } from "../../components/grid";
import Comment from "../../components/comment";
import BgVideo from "../../components/bgVideo";

import { Container, HeaderContainer, Spacer } from "./styles";

// Assets
import nat8 from "../../assets/nat-8.jpg";
import nat9 from "../../assets/nat-9.jpg";
import vidmp4 from "../../assets/video.mp4";
import vidweb from "../../assets/video.webm";

const Index: React.FC = () => {
  return (
    <Container>
      <BgVideo videoMp4={vidmp4} videoWeb={vidweb} />

      <HeaderContainer>
        <HeaderLabel>We make people genuinely happy</HeaderLabel>
      </HeaderContainer>

      <Row>
        <Comment
          image={nat8}
          name='Maya Golden'
          header='I had the best week ever with my family'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores reprehenderit rem velit quidem soluta modi vitae possimus? Fugiat ipsum amet sed suscipit adipisci ex minima in. Aspernatur. amet consectetur adipisicing elit. Ex maiores reprehenderit rem velit quidem'
        />
      </Row>
      <Spacer />
      <Row>
        <Comment
          image={nat9}
          name='Marcos Marques'
          header='My life is completely different now!'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores reprehenderit rem velit quidem soluta modi vitae possimus? Fugiat ipsum amet sed suscipit adipisci ex minima in. Aspernatur. amet consectetur adipisicing elit. Ex maiores reprehenderit rem velit quidem'
        />
      </Row>
    </Container>
  );
};

export default Index;
