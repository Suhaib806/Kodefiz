import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Portfolio from "./Portfolio";

describe("Portfolio page", () => {
  it("renders category sections without crashing", () => {
    render(<Portfolio />);

    expect(screen.getByText(/Work that/i)).toBeInTheDocument();
    expect(screen.getByText("Web Development")).toBeInTheDocument();
    expect(screen.getByText("Web Design")).toBeInTheDocument();
    expect(screen.getByText("Video & UGC Creative")).toBeInTheDocument();
  });
});
