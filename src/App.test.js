import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import List from './App'

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/To do list/i);
  expect(element).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByRole(/button/i);
  expect(element).toBeInTheDocument();
});

// gruop toggether test with describe

// describe("submit button",() => {
//   test("submit button is in the document", () => {
//     render(<App />)
//     const button = screen.getByText(/Add Item/i)
//     expect(button).toBeInTheDocument()
//   })

// })

// going to be honest here, I just "learned " this this morning and have no idea exactly
// whats going on, 
// these are the ones I managed to get from the lecture. 
// if in the furture I understand exactly what this is, i will start using at the moment
// I rather submit it and with more knowledge future Alex will fix this. 
// Alex from the present, cant use this yet.