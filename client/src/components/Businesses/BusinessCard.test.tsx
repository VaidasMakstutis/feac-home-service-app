import { render, screen } from "@testing-library/react";
import { BusinessCard } from "./BusinessCard";
import { Business } from "./types";

const mockBusiness: Business = {
  id: 1,
  name: "Test Business_1",
  description: "Test Business desc_1",
  address: "Test Street_1",
  category: "Cleaning",
  contactPerson: "Username_1",
  email: "test@gmail.com",
  image: "https://example.com/testimage_1.jpg"
};

const mockBusinessWithoutImage: Business = {
  ...mockBusiness,
  image: ""
};

describe("<BusinessCard />", () => {
  test("renders Business Card with all details", () => {
    render(<BusinessCard business={mockBusiness} />);
    expect(screen.getByAltText("Test Business_1")).toBeInTheDocument();
    expect(screen.queryByText(/Test Business desc_1/i)).toBeInTheDocument();
    expect(screen.getByText("Test Street_1")).toBeInTheDocument();
    expect(screen.getByText("Cleaning")).toBeInTheDocument();
    expect(screen.getByText("Username_1")).toBeInTheDocument();
    expect(screen.getByText("test@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("Book now")).toBeInTheDocument();
  });

  test("does not render image if no image", () => {
    render(<BusinessCard business={mockBusinessWithoutImage} />);
    expect(screen.queryByAltText("Test Business_1")).not.toBeInTheDocument();
  });

  test("renders the 'Book now' button", () => {
    render(<BusinessCard business={mockBusiness} />);
    expect(screen.getByRole("button", { name: /Book now/i })).toBeInTheDocument();
  });
});
