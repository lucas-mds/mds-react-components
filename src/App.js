import React from 'react';
import './App.css';
import './normalize.css';

// Demos

// import Chat from './demos/Chat';
// import SimpleNonModal from './demos/SimpleNonModal';
// import ControlledNonModal from './demos/ControlledNonModal';
import TakePicture from './demos/TakePicture';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <Chat />
        <SimpleNonModal />
        <ControlledNonModal /> */}
        <TakePicture />
      </div>
    </div>
  );
}

export default App;
