import './App.css';
import Wrapper from './Wrapper';
import Box from './Box'

function App() {

  const boxes = []
  for(let i = 0; i < 625; i++) {
    boxes.push(<Box key={i} />)
  }

  return (
    <Wrapper>
      {boxes}
    </Wrapper>
  );
}

export default App;
