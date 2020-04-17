import React from 'react';
import { render } from '@testing-library/react';
import App from './App/App';

test('renders app github cards using function', () => {
  const { getByText } = render(<App />);

  //const linkElement = getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
