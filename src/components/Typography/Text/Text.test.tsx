import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Text from '.';

describe('<Text />', () => {
  it('should render correctly', () => {
    render(
      <Text as="span" variant="strong" color="textSecondary" marked="fonGray">
        Text component
      </Text>,
    );
    expect(screen.getByText('Text component')).toBeInTheDocument();
  });
});
