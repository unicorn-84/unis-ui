import React from 'react';
import { BaseButton } from '../../src';

const App = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget as HTMLButtonElement;
    currentTarget.classList.toggle('text-white');
  };
  return (
    <div className="container max-w-3xl m-auto px-4 mt-10">
      <BaseButton className="bg-rose-500 rounded-none" onClick={handleClick}>
        Share on Telegram
      </BaseButton>
    </div>
  );
};

export default App;
