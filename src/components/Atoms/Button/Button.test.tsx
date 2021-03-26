import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('renders Button correctly', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders Button with `color` correctly', () => {
    render(<Button color="primary">Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders Button with `disabled` correctly', () => {
    render(<Button disabled>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders Button with `fullWidth` correctly', () => {
    render(<Button fullWidth>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders Button with `href` correctly', () => {
    render(<Button href="#">Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('renders Button with `variant` correctly', () => {
    render(<Button variant="contained">Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
