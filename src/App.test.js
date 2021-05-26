import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveStyle({color: 'blue'});

  // const link = document.getElementsByClassName('App-link')[0];
  // const style = window.getComputedStyle(link);  
  // console.log(style);
});
