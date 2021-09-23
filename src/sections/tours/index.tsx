import React from "react";
import { useTheme } from "styled-components";

import { ButtonContainer, Container, HeaderContainer } from "./styles";

// Components
import Card from "../../components/card";
import { Row } from "../../components/grid";
import HeaderLabel from "../../components/headerLabel";
import MyButton from "../../components/myButton";

// Assets
import nat5 from "../../assets/nat-5.jpg";
import nat6 from "../../assets/nat-6.jpg";
import nat7 from "../../assets/nat-7.jpg";

const Index: React.FC = () => {
  const theme = useTheme();

  const contents = {
    firstCard: [
      "3 day tours",
      "Up to 30 people",
      "2 tours guides",
      "Sleep in cozy hotels",
      "Difficulty: easy",
    ],
    secondCard: [
      "7 day tour",
      "Up to 40 people",
      "6 tours guides",
      "Sleep in provided tents",
      "Difficulty: medium",
    ],
    thirdyCard: [
      "5 day tour",
      "Up to 15 people",
      "3 tours guides",
      "Sleep in provided tents",
      "Difficulty: hard",
    ],
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderLabel>most popular tours</HeaderLabel>
      </HeaderContainer>
      <Row>
        <div className='col _1of3'>
          <Card
            color='orange'
            image={nat5}
            header='the sea explorer'
            content={contents.firstCard}
            price={99.9}
          />
        </div>
        <div className='col _1of3'>
          <Card
            color='green'
            image={nat6}
            header='the forest hiker'
            content={contents.secondCard}
            price={100.0}
          />
        </div>
        <div className='col _1of3'>
          <Card
            color='blue'
            image={nat7}
            header='the snow adventurer'
            content={contents.thirdyCard}
            price={200.45}
          />
        </div>
      </Row>
      <ButtonContainer>
        <MyButton
          label='Discover all tours'
          textColor={theme.colors.font.white}
          backgroundColor={theme.colors.main.mediumGreen}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Index;
