import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import Heading from '.';

describe('Heading', () => {
  it('renders', () => {
    render(
      <Heading level="h1" variant="title">
        <span>Heading component</span>,
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toBeInTheDocument();
  });
  test('has the class attribute', () => {
    render(
      <Heading level="h1" variant="title" className="class">
        Heading component
      </Heading>,
    );
    expect(screen.getByText('Heading component')).toHaveAttribute('class');
  });
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Heading level="h1" variant="title" a11yLabel="1">
        Heading component
      </Heading>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
