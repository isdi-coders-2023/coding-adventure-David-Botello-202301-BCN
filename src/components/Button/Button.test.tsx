import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it's rendered with the text 'Sign up'", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedText = "Sign up";

      render(<Button text={expectedText} />);

      const text = screen.getByRole("button", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
