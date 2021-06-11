import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <Pagination direction="column" gap="xsmall" color="dark" count={5} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
