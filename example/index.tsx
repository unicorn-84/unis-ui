import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Container, Image } from '../src';
import './index.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Image
          alt="The lamp"
          src="https://res.cloudinary.com/unicorn84/image/upload/c_scale,e_improve,q_auto:best,w_800/v1591287502/lamp.png"
          placeholder="https://res.cloudinary.com/unicorn84/image/upload/c_scale,e_blur:2000,q_auto:low,w_800/v1591287502/lamp.webp"
          loading="lazy"
        />
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
