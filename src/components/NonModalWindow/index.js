import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import {
  Container,
  Content,
} from './styles';

const NonModalWindow = ({
  open,
  minimized,
  content,
  position,
  align,
  dragProps,
  header,
}) => (
  open && (
    <Draggable {...dragProps}>
      <Container position={position} align={align}>
        {header}
        <Content minimized={minimized}>
          {content}
        </Content>
      </Container>
    </Draggable>
  )
);

NonModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  minimized: PropTypes.bool,
  content: PropTypes.node.isRequired,
  position: PropTypes.string,
  align: PropTypes.string,
  dragProps: PropTypes.object,
  header: PropTypes.node.isRequired,
};

NonModalWindow.defaultProps = {
  minimized: false,
  position: 'bottom',
  align: 'right',
  dragProps: {
    bounds: 'parent',
    axis: '',
  },
};

export default NonModalWindow;
