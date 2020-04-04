import React from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import {
  Container,
  Header,
  Content,
  Title,
  IconButton,
} from './styles';

const NonModalWindow = ({
  open,
  toggleOpen,
  minimized,
  toggleMinimized,
  minimizeIcon,
  maximizeIcon,
  closeIcon,
  title,
  content,
  position,
  align,
  dragProps,
}) => (
  open && (
    <Draggable {...dragProps}>
      <Container position={position} align={align}>
        <Header>
          <Title>{title}</Title>
          <IconButton onClick={toggleMinimized} icon={minimized ? minimizeIcon : maximizeIcon} />
          <IconButton onClick={toggleOpen} icon={closeIcon} />
        </Header>
        <Content minimized={minimized}>
          {content}
        </Content>
      </Container>
    </Draggable>
  )
);

NonModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  minimized: PropTypes.bool.isRequired,
  toggleMinimized: PropTypes.func.isRequired,
  minimizeIcon: PropTypes.elementType.isRequired,
  maximizeIcon: PropTypes.elementType.isRequired,
  closeIcon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  position: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  dragProps: PropTypes.object.isRequired,
};

export default NonModalWindow;
