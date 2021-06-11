import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Box as="ul" justify="space-around" align="center" inline>
      <li>1</li>
      <li>2</li>
      <li>
        <div style={{ height: 150, width: 150, backgroundColor: 'pink' }}></div>
      </li>
    </Box>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
