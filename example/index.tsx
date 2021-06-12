import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PaginationItem } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <PaginationItem color="dark" />;
};

ReactDOM.render(<App />, document.getElementById('root'));
