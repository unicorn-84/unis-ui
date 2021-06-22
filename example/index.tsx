import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Bar } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Bar as="header" maxWidth="lg" padding={{ y: 'small' }}>
        Header
      </Bar>
      <Bar as="footer" maxWidth="lg">
        Footer
      </Bar>
      ;
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
