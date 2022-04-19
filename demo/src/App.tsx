import React from 'react';
import { Button } from '../../src';

const App = () => {
  return (
    <div className="container max-w-3xl m-auto px-4 mt-10 transition">
      <Button disabled>Share on Telegram</Button>
      <Button>Share on Telegram</Button>
      <Button color="primary">Share on Telegram</Button>
      <Button color="secondary">Share on Telegram</Button>
      <Button color="success">Share on Telegram</Button>
      <Button color="info">Share on Telegram</Button>
      <Button color="warning">Share on Telegram</Button>
      <Button color="error">Delete</Button>
    </div>
  );
};

export default App;
