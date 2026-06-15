import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Stories from "../pages/Stories";

describe("Stories Component", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <Stories />
      </MemoryRouter>,
    );

    expect(screen.getByText(/hazy full moon/i)).toBeInTheDocument();
  });
});
