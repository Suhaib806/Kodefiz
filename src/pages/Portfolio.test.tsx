import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Portfolio from "./Portfolio";

describe("Portfolio page", () => {
  it("renders the portfolio sections without crashing", () => {
    render(<Portfolio />);

    expect(screen.getByText(/Featured Case Study/i)).toBeInTheDocument();
    expect(screen.getByText(/A showcase of outcomes, not just screenshots/i)).toBeInTheDocument();
  });
});
