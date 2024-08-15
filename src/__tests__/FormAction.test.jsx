import { render } from "@testing-library/react";
import FormAction from "../components/FormAction";
import { describe, expect, it } from "vitest";

describe("FormAction", () => {
    it("renders the button with the right text", () => {
        const {getByText} = render(<FormAction text="Submit" />);
        expect(getByText('Submit')).toBeInTheDocument();
    });

    it("applies right button type", () => {
        const { getByRole } = render(<FormAction text="Submit" />);
        const button = getByRole("button");
        expect(button).toHaveAttribute("type", "submit");
      });
})