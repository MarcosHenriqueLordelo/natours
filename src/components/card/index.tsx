import React from "react";
import { useTheme } from "styled-components";

import {
  CardSide,
  Container,
  Image,
  Header,
  Content,
  ContentItem,
  PriceBox,
  BackContent,
} from "./styles";

import MyButton from "../../components/myButton";

interface PropTypes {
  color: "blue" | "orange" | "green";
  image: string;
  header: string;
  content: string[];
  price: number;
}

const Index: React.FC<PropTypes> = ({
  color,
  image,
  header,
  content,
  price,
}) => {
  const theme = useTheme();

  const getColor = (color: "blue" | "orange" | "green"): string => {
    switch (color) {
      case "blue":
        return theme.colors.main.lightBlue;
      case "orange":
        return theme.colors.main.lightOrange;
      case "green":
        return theme.colors.main.lightGreen;
    }
  };

  return (
    <Container>
      <CardSide className='cardSide front'>
        <Image className={`${color}`} src={image} />
        <Header>
          <span className={`${color}`}>{header}</span>
        </Header>
        <Content>
          {content.map((item, index) => (
            <ContentItem key={index}>{item}</ContentItem>
          ))}
        </Content>
      </CardSide>
      <CardSide className={`cardSide back ${color}`}>
        <BackContent>
          <PriceBox>
            <p className='label'>only for</p>
            <p className='price'>${price}</p>
          </PriceBox>
          <MyButton
            label='Book Now'
            backgroundColor={theme.colors.font.white}
            textColor={getColor(color)}
          />
        </BackContent>
      </CardSide>
    </Container>
  );
};

export default Index;
