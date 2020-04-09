import React, { useState } from 'react';
import NonModalWindow from '../NonModalWindow';

import Image from './imgs/Lucas.jpg';
import { FiMinus } from 'react-icons/fi';

// Styled Components
import { List, ListItem, ItemLabel, RoundImage, Header } from './styles';


const Content = () => (
  <div>
    <List>
      <ListItem>
        <RoundImage image={Image} />
        <ItemLabel>Nice Name</ItemLabel>
      </ListItem>
      <ListItem>
        <RoundImage image={Image} />
        <ItemLabel>Nice Name</ItemLabel>
      </ListItem>
      <ListItem>
        <RoundImage image={Image} />
        <ItemLabel>Nice Name</ItemLabel>
      </ListItem>
    </List>
  </div>
);

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
      content={<Content />}
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
