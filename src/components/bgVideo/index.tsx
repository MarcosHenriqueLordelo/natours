import React from "react";

import { Container, Video } from "./styles";

interface PropTypes {
  videoMp4?: string;
  videoWeb?: string;
}

const Index: React.FC<PropTypes> = ({ videoMp4, videoWeb }) => {
  return (
    <Container>
      <Video autoPlay muted loop>
        {videoMp4 && <source src={videoMp4} type='video/mp4' />}
        {videoWeb && <source src={videoWeb} type='video/webm' />}
        Your browser is not supported!
      </Video>
    </Container>
  );
};

export default Index;
