import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import Text from '.';

describe('Text', () => {
  it('renders', () => {
    render(<Text>Text component</Text>);
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });
  test('has the class attribute', () => {
    render(<Text className="class">Text component</Text>);
    expect(screen.getByText('Text component')).toHaveAttribute('class');
  });
  test('should have no accessibility violations', async () => {
    const { container } = render(<Text a11yLabel="1">Text component</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
