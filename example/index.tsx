import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, Button } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Box>
      <Box
        margin={{
          top: 'none',
          x: 'small',
          y: 'small',
        }}
      >
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </Box>
      <Box>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
        <Button>Button 4</Button>
      </Box>
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
