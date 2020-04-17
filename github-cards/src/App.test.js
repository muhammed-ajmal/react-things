import React from 'react';
import { render } from '@testing-library/react';
import AppF from './App/Using-Function';
import AppFP from './App/Using-Func-Dir-Props';
import AppAF from './App/Using-Arrow-Func';
import AppC from './App/Using-Class';

test('renders app github cards using function', () => {
  const { getByText } = render(<AppF />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
test('renders app github cards using function (dir props)', () => {
  const { getByText } = render(<AppFP />);
});

test('renders app github cards using arrow function', () => {
  const { getByText } = render (<AppAF />);
});

test('renders app github cards using class', () => {
  const { getByText } = render(<AppC />);
});
