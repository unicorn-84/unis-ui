import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <Pagination count={5} shape="rounded" gap="xsmall" active={10} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
