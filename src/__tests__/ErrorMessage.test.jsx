import { render } from "@testing-library/react";
import ErrorMessage from "../components/ErrorMessage";
import { describe, it, expect } from "vitest";

describe("ErrorMessage", () => {
    it("renders message correctly"), () => {
        const { getByText } = render(<ErrorMessage message="Error occurred" />);
        expect(getByText('Error occurred')).toBeInTheDocument();
    }
})