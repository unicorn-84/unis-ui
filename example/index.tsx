import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box, PaginationItem } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <PaginationItem />;
};

ReactDOM.render(<App />, document.getElementById('root'));
