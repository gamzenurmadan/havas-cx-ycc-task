// src/components/Signup/__tests__/Signup.test.jsx
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from "../components/Signup";
import { describe, it, expect } from "vitest";

describe("Signup", () => {
  it("renders the form correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    expect(getByPlaceholderText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("Email address")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByText("Signup")).toBeInTheDocument();
  });

  it("displays error message when invalid information is entered", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("Username"), { target: { value: "newuser" } });
    fireEvent.change(getByPlaceholderText("Email address"), { target: { value: "" } });
    fireEvent.change(getByPlaceholderText("Password"), { target: { value: "password" } });
    fireEvent.click(getByText("Signup"));

    expect(await findByText("Registration failed. Please try again.")).toBeInTheDocument();
  });
});
