import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from '.';

describe('<Paragraph />', () => {
  it('should render correctly', () => {
    render(
      <Paragraph variant="body" color="brandPrimary" disableMargins>
        Paragraph component
      </Paragraph>,
    );
    expect(screen.getByText('Paragraph component')).toBeInTheDocument();
  });
});
