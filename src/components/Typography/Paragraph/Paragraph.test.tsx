import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';
import Paragraph from '.';

describe('Paragraph', () => {
  it('renders', () => {
    render(<Paragraph>Paragraph component</Paragraph>);
    expect(screen.getByText('Paragraph component')).toBeInTheDocument();
  });
  test('has the class attribute', () => {
    render(<Paragraph className="class">Paragraph component</Paragraph>);
    expect(screen.getByText('Paragraph component')).toHaveAttribute('class');
  });
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Paragraph a11yLabel="1">Paragraph component</Paragraph>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
