import React from 'react';
import { ButtonBase } from '../../src';

const App = () => {
  return (
    <div className="container max-w-xs m-auto px-4 mt-10 space-y-10">
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="primary">
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="primary">
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="primary">
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="primary">
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="primary">
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="primary">
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="primary">
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="primary">
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="outline primary">
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="outline primary">
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="outline primary">
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="outline primary">
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="outline primary">
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="outline primary">
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="outline primary">
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="outline primary">
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="outline gray">
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="outline gray">
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="outline gray">
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="outline gray">
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="outline gray">
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="outline gray">
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="outline gray">
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="outline gray">
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="ghost">
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="ghost">
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="ghost">
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="ghost">
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="ghost">
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="ghost">
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="ghost">
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="ghost">
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="space-y-2">
        <ButtonBase size="lg" variant="primary" width="fluid">
          Button
        </ButtonBase>
        <ButtonBase size="lg" variant="primary">
          Button
        </ButtonBase>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="primary" destructive>
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="primary" destructive>
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="outline primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="outline primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="outline primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="outline primary" destructive>
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="outline primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="outline primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="outline primary" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="outline primary" destructive>
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="ghost" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="ghost" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="ghost" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="ghost" destructive>
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="ghost" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="ghost" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="ghost" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="ghost" destructive>
            Button
          </ButtonBase>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase size="lg" variant="outline gray" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="md" variant="outline gray" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="sm" variant="outline gray" destructive>
            Button
          </ButtonBase>
          <ButtonBase size="xs" variant="outline gray" destructive>
            Button
          </ButtonBase>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonBase disabled size="lg" variant="outline gray" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="md" variant="outline gray" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="sm" variant="outline gray" destructive>
            Button
          </ButtonBase>
          <ButtonBase disabled size="xs" variant="outline gray" destructive>
            Button
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};

export default App;
