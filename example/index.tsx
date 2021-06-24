import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Link, Bar, Heading, Box } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Bar as="header" color="secondary" padding={{ y: 'small' }}>
      <Box basis="1/4">
        <Heading level="h2" variant="title" disableMargins>
          Brand
        </Heading>
      </Box>
      <Nav justify="space-around">
        {['Home', 'About', 'Gallery', 'Contact'].map((item, i) => (
          <Link href="#" color="textLight" key={i}>
            {item}
          </Link>
        ))}
      </Nav>
      <Nav justify="space-evenly">
        {['...more'].map((item, i) => (
          <Link href="#" color="textLight" key={i}>
            {item}
          </Link>
        ))}
      </Nav>
    </Bar>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
