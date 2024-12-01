import { render, screen } from "@testing-library/react";
import { CategoryCard } from "./CategoryCard";
import { Category } from "./types";
import { MemoryRouter } from "react-router-dom";

const mockCategory: Category = {
  id: 1,
  name: "Test Category name_1",
  bgcolor: "Test Category bgcolor_1",
  icon: "Test Category Icon_1"
};

describe("<CategoryCard />", () => {
  test("renders Category Card with all details", () => {
    render(
      <MemoryRouter>
        <CategoryCard category={mockCategory} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Category name_1")).toBeInTheDocument();

    const iconItem = screen.getByTestId("icon-url");
    expect(iconItem).toHaveStyle(`mask-image: url(${mockCategory.icon})`);
  });
});
