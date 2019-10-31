import React from 'react';
import { render } from "@testing-library/react"
import App from './App';
import AtBatDash from "./components/AtBatDash"

test(`renders without crashing`, ()=> {
  render(<App />);
})

test(`AtBatDash renders without crashing`, () => {
  render(<AtBatDash />)
})

test(`strike is rendered`, () => {
  const { getByTestId } = render(<AtBatDash />);

  getByTestId("strikeText");
})


test(`strike is rendered`, () => {
  const { getByTestId } = render(<AtBatDash />);

  getByTestId("ballText");
})