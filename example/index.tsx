import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <Button fullWidth>Button</Button>;
};

ReactDOM.render(<App />, document.getElementById('root'));
