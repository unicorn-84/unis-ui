import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Container from '.';

describe('Container', () => {
  it('should render correctly', () => {
    render(
      <Container maxWidth="xl" disableGutters>
        Content
      </Container>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
