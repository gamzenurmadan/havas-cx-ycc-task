import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SuccessMessage from "../components/SuccessMessage";

describe("SuccessMessage", () => {
    it("renders message correctly"), () => {
        const { getByText } = render(<SuccessMessage message="Succesful Message" />);
        expect(getByText("Succesful Message")).toBeInTheDocument();
    }
})