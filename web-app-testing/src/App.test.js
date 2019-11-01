import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import App from './App';
import AtBatDash from "./components/AtBatDash"

test(`renders without crashing`, ()=> {
  render(<App />);
})

test(`AtBatDash renders without crashing`, () => {
  render(<AtBatDash />)
})

test(`strikes is rendered`, () => {
  const { getByTestId } = render(<AtBatDash />);

  getByTestId("strikeText");
})


test(`balls is rendered`, () => {
  const { getByTestId } = render(<AtBatDash />);

  getByTestId("ballText");
})

test(`strike button is working`, () => {
  const { getByTestId } = render(<AtBatDash />);

  fireEvent.click(getByTestId('strikeBtn'))
})

test(`ball button is working`, () => {
  const { getByTestId } = render(<AtBatDash />);

  fireEvent.click(getByTestId('ballBtn'))
})

test(`foul button is working`, () => {
  const { getByTestId } = render(<AtBatDash />);

  fireEvent.click(getByTestId('foulBtn'))
})

test(`out button is working`, () => {
  const { getByTestId } = render(<AtBatDash />);

  fireEvent.click(getByTestId('outBtn'))
})