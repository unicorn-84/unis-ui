import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Heading } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Heading level="h1" variant="title">
        Heading component
      </Heading>
      <Heading level="h1" variant="h2">
        Heading component
      </Heading>
      <Heading level="h1" variant="h3">
        Heading component
      </Heading>
      <Heading level="h1" variant="h4">
        Heading component
      </Heading>
      <Heading level="h1" variant="subtitle">
        Heading component
      </Heading>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
