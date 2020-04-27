import React, { useState } from 'react';
import { FiMinus } from 'react-icons/fi';

import Items from './items';

// Components
import NonModalWindow from '../../components/NonModalWindow';
import StyledList from '../../components/List';


// Styles
import { Header } from './styles';

const Chat = () => {
  const [state, setState] = useState({
    minimized: false,
  });

  const CustomHeader = () => (
    <Header
      className={!state.minimized && 'handle'}
      onClick={() => {
        if (state.minimized) setState({ ...state, minimized: !state.minimized });
      }}
    >
      <span>Chat List Example</span>
      {
        !state.minimized && (
          <FiMinus
            style={{ marginLeft: 'auto' }}
            onClick={() => setState({ ...state, minimized: !state.minimized })}
          />
        )
      }
    </Header>
  );

  return (
    <NonModalWindow
      open
      header={<CustomHeader />}
      content={<StyledList items={Items} />}
      minimized={state.minimized}
      dragProps={{
        axis: 'x',
        handle: '.handle',
        bounds: 'parent',
      }}
    />
  );
};

export default Chat;
