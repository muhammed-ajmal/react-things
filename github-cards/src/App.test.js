import React from 'react';
import { render } from '@testing-library/react';
import AppF from './App/Using-Function';
import AppFP from './App/Using-Func-Dir-Props';
import AppAF from './App/Using-Arrow-Func';
import AppC from './App/Using-Class';
import AppICSS from './App/Using-InlineCSS';
import AppDwoF from './App/Final-App-Design-without-Form';

test('1.renders app github cards using function', () => {
  const { getByText } = render(<AppF />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
test('2.renders app github cards using function (dir props)', () => {
  const { getByText } = render(<AppFP />);
});

test('3.renders app github cards using arrow function', () => {
  const { getByText } = render (<AppAF />);
});

test('4.renders app github cards using class', () => {
  const { getByText } = render(<AppC />);
});

test('5.renders app github cards using inline css', () => {
  const { getByText } = render(<AppICSS />);
});

test('6.renders app github cards with test data and static design',() => {
  const { getByText } = render(<AppDwoF />);
});
