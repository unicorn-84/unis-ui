import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Link, Bar, Box, Heading } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Box height={{ min: '100vh' }} width="1/2" align="center" justify="center">
      <Heading level="h2" variant="title" disableMargins>
        Brand
      </Heading>
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
