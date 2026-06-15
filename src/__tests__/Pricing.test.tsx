import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Pricing from "../pages/Pricing";

describe("Pricing Component", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>,
    );

    expect(screen.getByText(/create a your stories/i)).toBeInTheDocument();
  });
});
