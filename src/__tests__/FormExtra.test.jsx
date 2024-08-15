import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FormExtra from "../components/FormExtra";

describe("FormExtra", () => {
    it("renders the checkbox and link correctly", () => {
      const { getByLabelText, getByText } = render(<FormExtra />);
      expect(getByLabelText("Remember Me")).toBeInTheDocument();
      expect(getByText("Forgot your password?")).toBeInTheDocument();
    });
  });