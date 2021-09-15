import React from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

// Utils
import GlobalCss from "./utils/globalCss";

// Components
import Header from "./components/header";

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
      </Container>
    </ThemeProvider>
  );
};

export default App;
