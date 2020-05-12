import React from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';

import {
  Container,
  CameraStream,
  Controllers,
  ToggleVideo,
} from './styles';

const CameraDevice = () => {
  const [toggleStream, setToggle] = React.useState(true);

  React.useEffect(() => {
    const video = document.querySelector('#videoElement');

    if (toggleStream) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch(() => {
          console.log('Something went wrong!');
        });
    }

    if (toggleStream === false) {
      const stream = video.srcObject;
      const tracks = stream && stream.getTracks();

      if (tracks) {
        tracks.forEach((track) => {
          track.stop();
        });
      }

      video.srcObject = null;
    }
  }, [toggleStream]);

  return (
    <Container>
      <CameraStream
        id="videoElement"
        autoPlay
        width="400px"
        height="300px"
      />

      <Controllers>
        <ToggleVideo type="button" onClick={() => setToggle(!toggleStream)}>
          {!toggleStream ? <FaPlay /> : <FaStop />}
        </ToggleVideo>
      </Controllers>
    </Container>
  );
};

export default CameraDevice;
