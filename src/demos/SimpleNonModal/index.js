import React from 'react';

import NonModalWindow from '../../components/NonModalWindow';

import {
  Header,
  Title,
} from './styles';

const SimpleHeader = () => (
  <Header>
    <Title>Simple Title</Title>
  </Header>
);

export default () => (
  <NonModalWindow
    open
    minimized={false}
    header={<SimpleHeader />}
    content="Cool content"
    position="bottom"
    align="center"
    dragProps={{
      bounds: 'parent',
      axis: 'x',
    }}
  />
);
