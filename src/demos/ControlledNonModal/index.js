import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMinus } from 'react-icons/fi';

import NonModalWindow from '../../components/NonModalWindow';

import {
  Header,
  Title,
  IconButton,
} from './styles';

export default () => {
  const [state, setState] = useState({
    open: false,
    minimized: false,
  });

  const toggleMinimized = () => setState({ ...state, minimized: !state.minimized });
  const toggleOpen = () => setState({ ...state, open: !state.open });

  const ControlledHeader = () => (
    <Header>
      <Header>
        <Title>More Control!</Title>
        <IconButton
          onClick={toggleMinimized}
          icon={<FiMinus />}
        />
        <IconButton onClick={toggleOpen} icon={<MdClose />} />
      </Header>
    </Header>
  );

  return (
    <>
      <button type="button" onClick={toggleOpen}>Toggle NonModalWindow</button>
      <NonModalWindow
        open={state.open}
        minimized={state.minimized}
        header={<ControlledHeader />}
        content="Cool content"
        position="bottom"
        align="left"
        dragProps={{
          bounds: 'parent',
          axis: 'x',
        }}
      />
    </>
  );
};
