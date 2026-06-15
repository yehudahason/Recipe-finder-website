import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Features from "../pages/Features";

describe("Features Component", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <Features />
      </MemoryRouter>,
    );

    expect(screen.getByText(/we make sure all/i)).toBeInTheDocument();
  });
});
