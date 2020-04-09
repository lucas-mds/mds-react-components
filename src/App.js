import React, { useState } from 'react';
import './App.css';
import './normalize.css';

import { MdClose } from 'react-icons/md';
import { FiMinus } from 'react-icons/fi';

// Custom Components
import NonModalWindow from './components/NonModalWindow';
import Chat from './components/Chat';


function App() {
  const [state, setState] = useState({
    open: false,
    minimized: false,
  });

  const toggleMinimized = () => setState({ ...state, minimized: !state.minimized });

  const toggleOpen = () => setState({ ...state, open: !state.open });

  // const customComponents = () => {
  //   const header = (
  //     <div>
  //       <span>custom title</span>
  //       <button>custom button</button>
  //     </div>
  //   );

  //   return header;
  // };

  return (
    <div className="App">
      <header className="App-header">
        {/* <button type="button" onClick={toggleOpen}>Click me</button>
        <NonModalWindow
          open={state.open}
          toggleOpen={toggleOpen}
          minimized={state.minimized}
          toggleMinimized={toggleMinimized}
          minimizeIcon={<FiMinus />}
          maximizeIcon={<FiMinus />}
          closeIcon={<MdClose />}
          title="Nice Non-Modal Title"
          content="Cool content"
          position="bottom"
          align="right"
          dragProps={{
            bounds: 'parent',
            axis: 'x',
          }}
          // header={customComponents()}
        />*/}
        <Chat />
      </header>
    </div>
  );
}

export default App;
