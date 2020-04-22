import React from 'react';
import { render } from '@testing-library/react';
import Hello from './App/App';
import HelloJSX from './App/AppJSX';
//import App from './App/App';

test('renders first sample app', () => {
  const { getByText } = render(<Hello />);
});

test ('renders JSX directly ', () => {
  const { getByText } = render(<HelloJSX />);
});

test('renders learn react link', () => {
  //const { getByText } = render(<App />);
  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
