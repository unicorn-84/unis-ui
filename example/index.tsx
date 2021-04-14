import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Box, Link } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <header style={{ backgroundColor: '#eee' }}>
      <Container maxWidth="xl" disableGutters>
        <Box
          padding="xsmall"
          style={{ backgroundColor: '#ddd' }}
          justify="space-between"
          wrap="wrap"
        >
          <Box style={{ backgroundColor: 'violet' }} grow={1}>
            Icon
          </Box>
          <Box style={{ backgroundColor: 'pink' }} gap="small" align="center">
            <Link>Home</Link>
            <Link>Projects</Link>
            <Link>About</Link>
            <Link>Contacts</Link>
          </Box>
          <Box style={{ backgroundColor: 'cyan' }} padding="small">
            More menu
          </Box>
        </Box>
      </Container>
    </header>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
