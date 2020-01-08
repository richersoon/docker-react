import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was changed on feature branch/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link2", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I was changed on feature branch/i);
  expect(linkElement).toBeInTheDocument();
});
