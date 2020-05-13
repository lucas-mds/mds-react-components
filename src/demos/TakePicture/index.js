import React, { useState } from 'react';

import CameraDevice from '../../components/CameraDevice';
import PreviewPicture from '../../components/PreviewPicture';

import {
  Container,
  StreamContainer,
  PreviewContainer,
  Title,
} from './styles';

const TakePicture = () => {
  const [ss, setSS] = useState();

  const getScreenShot = (base64) => {
    setSS(base64);
  };

  return (
    <Container>
      <StreamContainer>
        <Title>Use your camera device to register a picture.</Title>
        <CameraDevice getCapture={getScreenShot} />
      </StreamContainer>
      <PreviewContainer>
        <Title>Picture Result</Title>
        <PreviewPicture imgSrc={ss} />
      </PreviewContainer>
    </Container>
  );
};

export default TakePicture;
