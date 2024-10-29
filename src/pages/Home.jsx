import { Hero } from "../components/Hero";
import { InputSearch } from "../components/InputSearch";
import { CategoriesList } from "../components/CategoriesList";
import { BusinessesList } from "../components/BusinessesList";

export function Home() {
  return (
    <>
      <Hero />
      <InputSearch />
      <CategoriesList />
      <BusinessesList />
    </>
  );
}
