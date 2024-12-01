import { Hero } from "../components/Hero/Hero";
import { InputSearch } from "../components/users/InputSearch";
import { CategoriesList } from "../components/Categories/CategoriesList";
import { BusinessesList } from "../components/Businesses/BusinessesList";

export function Home() {
  return (
    <>
      <Hero />
      <InputSearch />
      <CategoriesList />
      <h2 style={{ padding: "2rem 0 1.5rem" }}>Popular Businesses</h2>
      <BusinessesList />
    </>
  );
}
