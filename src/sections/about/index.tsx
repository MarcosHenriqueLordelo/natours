import React from "react";

import {
  Container,
  HeaderContainer,
  ImagesContainer,
  LearnMore,
  Paragraph,
  Subheader,
} from "./styles";
import { Row } from "../../components/grid";
import HeaderLabel from "../../components/headerLabel";

// Images
import p1 from "../../assets/nat-1-large.jpg";
import p2 from "../../assets/nat-2-large.jpg";
import p3 from "../../assets/nat-3-large.jpg";

const Index: React.FC = () => {
  return (
    <main>
      <Container>
        <HeaderContainer>
          <HeaderLabel>Exiting tours for adventurous people</HeaderLabel>
        </HeaderContainer>
        <div style={{ height: "8rem" }} />
        <Row>
          <div className='col _1of2'>
            <Subheader>You're going to fall in love with nature</Subheader>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              similique adipisci nostrum! Dignissimos qui porro nostrum
              perferendis? Quas ab blanditiis earum? Sed assumenda quam earum
              deserunt fugit sint beatae voluptatibus?
            </Paragraph>
            <Subheader>Live adventures like you never before</Subheader>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              similique adipisci nostrum! Dignissimos qui porro nostrum
              perferendis?
            </Paragraph>
            <LearnMore>Learn More &rarr;</LearnMore>
          </div>
          <div className='col _1of2'>
            <ImagesContainer>
              <img src={p1} alt='nature 1' className='p1' />
              <img src={p2} alt='nature 2' className='p2' />
              <img src={p3} alt='nature 3' className='p3' />
            </ImagesContainer>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default Index;
