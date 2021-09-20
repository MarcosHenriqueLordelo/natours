import React from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

// Utils
import GlobalCss from "./utils/globalCss";

// Components

// Sections
import Header from "./sections/header";
import About from "./sections/about";

const theme: DefaultTheme = {
  title: "default",
  colors: {
    lightGreen: "#7ed56f",
    mediumGreen: "#55c57a",
    darkGreen: "#28b485",
    font: {
      main: "#777777",
      white: "#ffffff",
    },
    background: {
      about: "#f7f7f7",
    },
  },
  fonts: {
    sizes: {
      small: "1.2rem",
      medium: "1.8rem",
      larger: "2.1rem",
    },
  },
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Container>
        <Header />
        <About />
      </Container>
    </ThemeProvider>
  );
};

export default App;
