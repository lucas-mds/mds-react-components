import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { BsPerson } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';


import {
  Placeholder,
  Container,
  Controllers,
  DeletePicture,
} from './styles';

const PreviewPicture = ({ imgSrc }) => {
  const [src, setSrc] = useState(imgSrc);

  const updateSrc = () => {
    if (imgSrc !== src) {
      setSrc(imgSrc);
    }
  };

  useEffect(updateSrc, [imgSrc]);

  if (src) {
    return (
      <Container>
        <img src={src} alt="user selfie" />
        <Controllers>
          <DeletePicture onClick={() => setSrc(null)}>
            <FaTrashAlt />
          </DeletePicture>
        </Controllers>
      </Container>
    );
  }

  return (
    <Placeholder>
      <BsPerson />
    </Placeholder>
  );
};

PreviewPicture.propTypes = {
  imgSrc: PropTypes.string,
};

PreviewPicture.defaultProps = {
  imgSrc: null,
};

export default PreviewPicture;
