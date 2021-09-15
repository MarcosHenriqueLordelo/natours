import React from "react";

import { Container } from "./styles";

interface props {
  label: string;
  onClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  href?: string;
  animated?: boolean;
}

const Index: React.FC<props> = ({
  label,
  onClick,
  backgroundColor,
  textColor,
  href,
  animated,
}) => {
  return (
    <Container
      href={href}
      backgroundColor={backgroundColor}
      textColor={textColor}
      animated={animated}
    >
      {label}
    </Container>
  );
};

export default Index;
