import { render } from '@testing-library/react';
import { NotFound } from '../pages/page-notfound';
import React from 'react';

describe('Page Not Found', () => {
  it('renders', () => {
    const { getByText } = render(<NotFound />);
    const pageNotFound = getByText(/Page Not Found/i);
    expect(pageNotFound).toBeInTheDocument();
  });
});
