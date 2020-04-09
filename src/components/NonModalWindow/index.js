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
  header,
}) => (
  open && (
    <Draggable {...dragProps}>
      <Container position={position} align={align}>
        {
          header || (
            <Header>
              <Title>{title}</Title>
              <IconButton
                onClick={toggleMinimized}
                icon={minimized ? minimizeIcon : maximizeIcon}
              />
              <IconButton onClick={toggleOpen} icon={closeIcon} />
            </Header>
          )
        }
        <Content minimized={minimized}>
          {content}
        </Content>
      </Container>
    </Draggable>
  )
);

NonModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func,
  minimized: PropTypes.bool,
  toggleMinimized: PropTypes.func,
  minimizeIcon: PropTypes.element,
  maximizeIcon: PropTypes.element,
  closeIcon: PropTypes.element,
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  position: PropTypes.string,
  align: PropTypes.string,
  dragProps: PropTypes.object,
  header: PropTypes.node,
};

NonModalWindow.defaultProps = {
  header: null,
  minimizeIcon: null,
  maximizeIcon: null,
  closeIcon: null,
  toggleOpen: null,
  toggleMinimized: null,
  title: null,
  minimized: false,
  position: 'bottom',
  align: 'right',
  dragProps: {
    bounds: 'parent',
    axis: '',
  },
};

export default NonModalWindow;
