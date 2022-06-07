import React from 'react';
import { ButtonBase } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xs m-auto px-4 mt-10 space-y-10">
      <ButtonBase fullWidth destructive>
        Share on Telegram
      </ButtonBase>
    </div>
  );
};

export default App;
