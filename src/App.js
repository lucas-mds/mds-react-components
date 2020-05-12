import React from 'react';
import './App.css';
import './normalize.css';

// Custom Components
import Chat from './demos/Chat';

// Demos
import SimpleNonModal from './demos/SimpleNonModal';
import ControlledNonModal from './demos/ControlledNonModal';
import CameraDevice from './components/CameraDevice';


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Chat />
        <SimpleNonModal />
        <ControlledNonModal />
        <CameraDevice />
      </div>
    </div>
  );
}

export default App;
