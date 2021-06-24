import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Link, Bar } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Bar
      as="header"
      direction="column"
      fixed="left"
      align="center"
      justify="center"
      padding="small"
    >
      <Nav gap="small" direction="column" align="center" justify="center">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Gallery</Link>
        <Link href="#">Contacts</Link>
      </Nav>
    </Bar>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
