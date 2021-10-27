import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

// Utils
import GlobalCss from "./utils/globalCss";

// Components
import Navigation from "./components/navigation";
import Modal from "./components/modal";

// Sections
import Header from "./sections/header";
import About from "./sections/about";
import Features from "./sections/features";
import Tours from "./sections/tours";
import Comments from "./sections/comments";
import Booking from "./sections/booking";
import Footer from "./sections/footer";

const theme: DefaultTheme = {
  title: "default",
  colors: {
    main: {
      lightGreen: "#7ed56f",
      mediumGreen: "#55c57a",
      darkGreen: "#28b485",
      lightOrange: "#ffb900",
      darkOrange: "#ff7730",
      lightBlue: "#2998ff",
      darkBlue: "#5643fa",
    },
    font: {
      placeholder: "#999999",
      light: "#eeeeee",
      main: "#777777",
      white: "#ffffff",
    },
    background: {
      about: "#f7f7f7",
      footer: "#333333",
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

const Container = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App: React.FC = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Navigation />
      <Header />
      <Container>
        <About />
        <Features />
        <Tours onCardClick={() => setModal(true)} />
        <Comments />
        <Booking />
      </Container>
      <Footer />
      <Modal open={modal} onClose={() => setModal(false)} />
    </ThemeProvider>
  );
};

export default App;
