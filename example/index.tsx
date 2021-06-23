import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Link href="#" disabled marked="fonGray" color="textLight" variant="button">
      Home
    </Link>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
