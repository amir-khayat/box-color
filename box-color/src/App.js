import './App.css';
import ColorForm from './components/ColorForm';
import Box from './components/Box';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <ColorForm setColor={setColor} color={color} boxes={boxes} setBoxes={setBoxes}/>
      <Box color={color} boxes={boxes} setBoxes={setBoxes}/>
    </div>
  );
}

export default App;
