import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Link, Bar, Heading, Box } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Bar
      as="header"
      justify="center"
      align="center"
      color="primary"
      maxWidth="lg"
      padding={{ y: 'small' }}
      wrap="wrap"
    >
      <Box grow={1}>
        <Heading level="h2" variant="title" disableMargins>
          Brand
        </Heading>
      </Box>

      <Nav grow={1} justify="flex-end" gap="small">
        <Link href="#" color="brandSecondary">
          Home
        </Link>
        <Link href="#" color="brandSecondary">
          About
        </Link>
        <Link href="#" color="brandSecondary">
          Gallery
        </Link>
        <Link href="#" color="brandSecondary">
          Contacts
        </Link>
      </Nav>
    </Bar>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
