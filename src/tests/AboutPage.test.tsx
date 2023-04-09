import { render } from '@testing-library/react';
import { About } from '../pages/page-about';
import React from 'react';

describe('Page About', () => {
  it('renders', () => {
    const { getByText } = render(<About />);
    const pageNotFound = getByText(/Page about us/i);
    expect(pageNotFound).toBeInTheDocument();
  });
});
