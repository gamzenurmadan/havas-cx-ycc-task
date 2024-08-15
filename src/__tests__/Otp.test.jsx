// src/components/Otp/__tests__/Otp.test.jsx
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Otp from "../components/Otp";
import { describe, it, expect } from "vitest";

describe("Otp", () => {
  it("renders the form correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Otp />
      </MemoryRouter>
    );

    expect(getByPlaceholderText("")).toBeInTheDocument();
    expect(getByText("Send")).toBeInTheDocument();
  });

  it("displays error message when false information is entered", async () => {
    const { getByPlaceholderText, getByText, findByText } = render(
      <MemoryRouter>
        <Otp />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText(""), { target: { value: "123456" } });
    fireEvent.click(getByText("Send"));

    expect(await findByText("Invalid OTP. Please try again.")).toBeInTheDocument();
  });
});
