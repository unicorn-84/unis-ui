import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Pagination } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Pagination
      items={5}
      padding="small"
      className="class"
      gap="xsmall"
      justify="center"
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
