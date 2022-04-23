import React from 'react';
import { Button } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xl m-auto px-4 mt-10 transition">
      <div className="space-x-4 flex">
        <Button variant="outlined" className="flex-1">
          Submit
        </Button>

        <Button variant="outlined" color="secondary" className="flex-1">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default App;
