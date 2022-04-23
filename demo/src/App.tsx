import React from 'react';
import { Link } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xl m-auto px-4 mt-10 transition">
      <div className="space-x-4 flex">
        <Link href="" variant="contained" className="flex-1">
          Submit
        </Link>

        <Link href="" variant="contained" color="secondary" className="flex-1">
          Reset
        </Link>
      </div>
    </div>
  );
};

export default App;
