import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './Components/App/App';

// Header tests

describe('Header', () => {
  test('"How it works" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /how it works/i }),
    ).toBeInTheDocument();
  });

  test('"About" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /about/i });
    userEvent.click(link);
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument();
  });

  test('"Search" link navigates to search page when search link is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const searchLink = screen.getByRole('link', { name: /search/i });
    userEvent.click(searchLink);

    expect(screen.getByText(/Find the best/i)).toBeInTheDocument();
  });

  test('"Logo" link navigates to search page when search link is clicked', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const logo = screen.getByRole('link', { name: /logo2/i });
    userEvent.click(logo);

    expect(screen.getByText(/No reactions/i)).toBeInTheDocument();
  });
});

// Footer tests

describe('Footer', () => {
  test('"Logo" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /logo.svg/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', {
        name: /No reactions to your reddit posts/i,
      }),
    ).toBeInTheDocument();
  });

  test('contains link pointing to profy employers page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const profyLink = screen.getAllByText(/profy.dev/i);
    expect(profyLink[1].getAttribute('href')).toEqual(
      'https://profy.dev/employers',
    );
  });
});

// Hero section

describe('Hero Section', () => {
  test('Heatmap image sends user to the search page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const image = screen.getByAltText(/main_table/i);
    userEvent.click(image);
    expect(
      screen.getByRole('heading', {
        name: /Find the best time for a subreddit/i,
      }),
    ).toBeInTheDocument();
  });

  test('Button sends user to the search page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /show me the best time/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', {
        name: /Find the best time for a subreddit/i,
      }),
    ).toBeInTheDocument();
  });
});

// Info section

describe('Info section', () => {
  test('contains links pointing to profy home and employers page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const aboutSection = screen.getAllByRole('article')[1];

    const profyLink = within(aboutSection).getByRole('link', {
      name: /profy\.dev/i,
    });
    expect(profyLink.getAttribute('href')).toEqual('https://profy.dev');

    const moreInfoLink = within(aboutSection).getByRole('link', {
      name: /click here for more information/i,
    });
    expect(moreInfoLink.getAttribute('href')).toEqual(
      'https://profy.dev/employers',
    );
  });
});

// Form section

describe('Form section', () => {
  test('new values is registered in form', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const link = screen.getByRole('link', { name: /show me the best time/i });
    userEvent.click(link);
    const searchInput = screen.getByLabelText('r /');
    userEvent.clear(searchInput);
    userEvent.type(searchInput, 'vuejs');
    expect(searchInput.value).toBe('vuejs');
    // const submitButton = screen.getByRole('button', { name: /search/i });
    // userEvent.click(submitButton);
    // expect(window.location.pathname).toEqual('/search/javascript');
  });

  test('input value changes to default subreddit when search link in header is clicked', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const link = screen.getByRole('link', { name: /search/i });
    userEvent.click(link);
    const searchInput = screen.getByLabelText('r /');
    expect(searchInput.value).toBe('javascript');
  });
});
