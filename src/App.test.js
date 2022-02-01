// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './Components/App/App';

// test('renders App', () => {
//   render(<App />);
// });

import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './Components/App/App';

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(
      <App />,
    );
    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /how it works/i }),
    ).toBeInTheDocument();
  });

});

describe('Footer', () => {
  test('"Logo" link points to the correct page', () => {
    render(
      <App />,
    );
    const link = screen.getByRole('link', { name: /logo.svg/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /No reactions to your reddit posts/i }),
    ).toBeInTheDocument();
  });

});
