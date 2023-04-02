import './App.css';
import Wrapper from './Wrapper';
import Box from './Box'
import Canvas from './Canvas';
import Controls from './Controls';
import { useState } from 'react';

function App() {
const [boxProps, setBoxProps] = useState('1')
const handleBoxPropsChange = (newBoxprops) => {
  setBoxProps(2 ** newBoxprops)
}

const boxCount = (size) => {
  const amount = (32*32/size)/size
  return amount
}
  const boxes = []
  for(let i = 0; i < boxCount(boxProps); i++) {
    boxes.push(<Box key={i} size={boxProps} />)
  }

  return (
    <Wrapper>
      <Controls onControlsChange={handleBoxPropsChange} />
      <Canvas>
        {boxes}
      </Canvas>
    </Wrapper>
  );
}

export default App;
