import React from 'react';
import PropTypes from 'prop-types';

import { FaPlay, FaStop, FaCamera } from 'react-icons/fa';

import {
  Container,
  CameraStream,
  Controllers,
  ToggleVideo,
  TakePicture,
} from './styles';

const CameraDevice = ({
  getCapture,
}) => {
  const [toggleStream, setToggle] = React.useState(true);

  React.useEffect(() => {
    const video = document.querySelector('#videoElement');

    if (toggleStream) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch(() => {
          console.log('Something went wrong =(');
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

  const getImageBase64 = () => {
    const videoEl = document.querySelector('#videoElement');
    const canvas = document.createElement('canvas');
    canvas.width = videoEl.clientWidth;
    canvas.height = videoEl.clientHeight;
    canvas.getContext('2d').drawImage(videoEl, 0, 0, canvas.width, canvas.height);

    getCapture(canvas.toDataURL());
  };

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
        <TakePicture type="button" onClick={getImageBase64}>
          <FaCamera />
        </TakePicture>
      </Controllers>
    </Container>
  );
};

CameraDevice.propTypes = {
  getCapture: PropTypes.func.isRequired,
};

export default CameraDevice;
