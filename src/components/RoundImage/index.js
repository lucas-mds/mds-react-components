import React from 'react';
import PropTypes from 'prop-types';

import { RoundImageContainer, RoundImageWrapper } from './styles';

const RoundImage = ({ image }) => (
  <RoundImageContainer>
    <RoundImageWrapper image={image} />
  </RoundImageContainer>
);

RoundImage.propTypes = {
  image: PropTypes.node.isRequired,
};

export default RoundImage;
