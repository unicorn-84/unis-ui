import React from 'react';
import { Input, Button } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xs m-auto px-4 mt-10 transition">
      <form className="space-y-6">
        <div className="space-y-3">
          <div>
            <Input required label="First Name*" className="w-full" />
          </div>
          <div>
            <Input required label="Last Name*" className="w-full" />
          </div>
          <div>
            <Input placeholder="Company" className="w-full" />
          </div>
          <div>
            <Input required type="email" label="Email*" className="w-full" />
          </div>
          <div>
            <Input
              required
              type="password"
              label="Password*"
              className="w-full"
            />
          </div>
        </div>
        <Button className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default App;
