import React from 'react';
import { Input, Button } from '../../src';

const App = () => {
  return (
    <div className="container max-w-sm m-auto px-4 mt-10 transition">
      <form className="space-y-6">
        <div className="space-y-3">
          <div>
            <Input />
          </div>
          <div>
            <Input disabled value={'Name'} />
          </div>
          <div>
            <Input placeholder="Please, enter your name" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
