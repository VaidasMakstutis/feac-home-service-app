import { render, screen } from "@testing-library/react";
import { CategoriesList } from "./CategoriesList";
import { Category } from "./types";
import { useCategories } from "./hooks";
import { MemoryRouter } from "react-router-dom";

jest.mock("./hooks");

const mockCategory: Category[] = [
  {
    id: 11,
    name: "Test Category name_11",
    bgcolor: "Test Category bgcolor_11",
    icon: "Test Category Icon_11"
  },
  {
    id: 12,
    name: "Test Category name_12",
    bgcolor: "Test Category bgcolor_12",
    icon: "Test Category Icon_12"
  }
];

describe("CategoriesList Component", () => {
  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({ data: mockCategory });
  });

  test("renders a list of categories", () => {
    render(
      <MemoryRouter>
        <CategoriesList />
      </MemoryRouter>
    );

    expect(screen.getByText("Test Category name_11")).toBeInTheDocument();
    expect(screen.getByText("Test Category name_12")).toBeInTheDocument();
  });

  test("renders an empty list if no categories", () => {
    (useCategories as jest.Mock).mockReturnValue({ data: [] });
    render(
      <MemoryRouter>
        <CategoriesList />
      </MemoryRouter>
    );

    expect(screen.queryByText("Test Category name_11")).not.toBeInTheDocument();
    expect(screen.queryByText("Test Category name_12")).not.toBeInTheDocument();
  });
});
