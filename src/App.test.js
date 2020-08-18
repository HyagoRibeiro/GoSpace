import React from 'react';
import { render } from '@testing-library/react';
import Router from './Components/Router/Router';


test('renders learn react link', () => {
  const { getByText } = render(<Router />);
  const linkElement = getByText(/GoSpace/i);
  expect(linkElement).toBeInTheDocument();
});
