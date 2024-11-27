import { render, screen } from "@testing-library/react";
import { BusinessesList } from "./BusinessesList";
import { Business } from "./types";
import { useBusinesses } from "./hooks";

jest.mock("./hooks");

const mockBusiness: Business[] = [
  {
    id: 11,
    name: "Test Business_11",
    description: "Test Business desc_11",
    address: "Test Street_11",
    category: "Cleaning",
    contactPerson: "Username_11",
    email: "test11@gmail.com",
    image: "https://example.com/testimage_11.jpg"
  },
  {
    id: 12,
    name: "Test Business_12",
    description: "Test Business desc_12",
    address: "Test Street_12",
    category: "Shifting",
    contactPerson: "Username_12",
    email: "test12@gmail.com",
    image: "https://example.com/testimage_12.jpg"
  }
];

describe("BusinessesList Component", () => {
  beforeEach(() => {
    (useBusinesses as jest.Mock).mockReturnValue({ data: mockBusiness });
  });

  test("renders a list of businesses", () => {
    render(<BusinessesList />);

    expect(screen.getByText("Test Business_11")).toBeInTheDocument();
    expect(screen.getByText("Test Business_12")).toBeInTheDocument();
  });

  test("filters business by category", () => {
    render(<BusinessesList categoryName="Cleaning" />);

    expect(screen.queryByText("Test Business_11")).toBeInTheDocument();
    expect(screen.queryByText("Test Business_12")).not.toBeInTheDocument();
  });

  test("renders an empty list if no businesses", () => {
    (useBusinesses as jest.Mock).mockReturnValue({ data: [] });
    render(<BusinessesList />);

    expect(screen.queryByText("Test Business_11")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Business_12")).not.toBeInTheDocument();
  });
});
