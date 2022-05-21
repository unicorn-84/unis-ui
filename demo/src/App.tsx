import React from 'react';
import { InputLabel, InputText } from '../../src';

const App = () => {
  return (
    <div className="container max-w-sm m-auto px-4 mt-10 transition">
      <form className="space-y-6">
        <div className="space-y-4">
          <div>
            <InputLabel label="Email" color="#000" />
          </div>
          <div>
            <InputLabel label="Email">
              <InputText />
            </InputLabel>
          </div>
          <div>
            <InputText />
          </div>
          <div>
            <InputText disabled />
          </div>
          <div>
            <InputText placeholder="Please, enter your name" />
          </div>
          <div>
            <InputText />
          </div>
          <div>
            <InputText />
          </div>
          <div>
            <InputText />
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
