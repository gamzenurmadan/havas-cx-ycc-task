import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../components/Login";
import { describe, it, expect } from "vitest";

describe("Login", () => {
    it("renders the form correctly", () => {
        const { getByPlaceholderText, getByText } = render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
    
        expect(getByPlaceholderText("Email address")).toBeInTheDocument();
        expect(getByPlaceholderText("Password")).toBeInTheDocument();
        expect(getByText("Login")).toBeInTheDocument();
    });

    it("displays the error message when false information is entered", async () => {
        const { getByPlaceholderText, getByText, findByText } = render(
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        );
    
        fireEvent.change(getByPlaceholderText("Email address"), { target: { value: "invalid@wrong.com" } });
        fireEvent.change(getByPlaceholderText("Password"), { target: { value: "wrongwrong" } });
        fireEvent.click(getByText("Login"));
    
        expect(await findByText("Invalid email or password.")).toBeInTheDocument();
      });

});