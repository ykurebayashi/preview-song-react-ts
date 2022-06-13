import { render, screen } from "@testing-library/react";
import { Login } from "../Login";

describe("Login page", () => {
  it("Should render properly the header", () => {
    render(<Login />);
    expect(screen.getByTestId("Login-header")).toBeInTheDocument();
  });

  it("Should render properly the login input", () => {
    render(<Login />);
    expect(screen.getByTestId("Login-input")).toBeInTheDocument();
  });

  it("Should render properly the login button", () => {
    render(<Login />);
    expect(screen.getByTestId("Login-btn")).toBeInTheDocument();
  });

  it("Should render properly the page", () => {
    render(<Login />);
    expect(screen.getByTestId("Login-main")).toBeInTheDocument();
  });
});
