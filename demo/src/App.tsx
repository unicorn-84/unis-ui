import React from 'react';
import { Input, Button } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xs m-auto px-4">
      <form noValidate className="mt-40 space-y-6">
        <div className="space-y-3">
          <div>
            <Input label="Username" id="username" name="username" />
          </div>
          <div>
            <Input label="Email" type="email" id="email" name="email" />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              helperText="Must have at least 6 characters"
            />
          </div>
          <div>
            <Input
              label="Confirm password"
              type="password"
              id="confirm"
              name="confirm"
            />
          </div>
        </div>
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default App;
