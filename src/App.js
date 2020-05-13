import React from 'react';
import './App.css';
import './normalize.css';

// Demos
// import Chat from './demos/Chat';
// import SimpleNonModal from './demos/SimpleNonModal';
// import ControlledNonModal from './demos/ControlledNonModal';
import CameraDevice from './components/CameraDevice';


function App() {
  const fetchImage = (image) => {
    console.log(image);
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* <Chat />
        <SimpleNonModal />
        <ControlledNonModal /> */}
        <CameraDevice getCapture={fetchImage} />
      </div>
    </div>
  );
}

export default App;
