import React from 'react';
import { render } from '@testing-library/react';
import AppF from './App/Using-Function';
import AppAF from './App/Using-Arrow-Func';

test('renders app github cards using function', () => {
  const { getByText } = render(<AppF />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});

test('renders app github cards using arrow function', () => {
  const { getByText } = render (<AppAF />)
});
