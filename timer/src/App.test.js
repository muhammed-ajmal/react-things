import React from 'react';
import { render } from '@testing-library/react';
import Hello from './App';

test('renders Hello react ', () => {
  const { getByText } = render(<Hello />);
});
