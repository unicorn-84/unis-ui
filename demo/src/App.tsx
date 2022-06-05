import React from 'react';
import { InputText } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xs m-auto px-4 mt-10 transition">
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <InputText
              helperText="This is an assistive text for the user"
              label="Username"
              size="sm"
              id="username"
              error
              errorMessage="Validation message text"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
