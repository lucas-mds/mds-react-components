import React from 'react';
import PropTypes from 'prop-types';

import RoundImage from '../RoundImage';

import {
  List,
  ListItem,
  ItemLabel,
} from './styles';

const StyledList = ({ items }) => (
  <List>
    {
      items.map(({ image, name }) => (
        <ListItem key={name}>
          <RoundImage image={image} />
          <ItemLabel>{name}</ItemLabel>
        </ListItem>
      ))
    }
  </List>
);

StyledList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default StyledList;
