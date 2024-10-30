import { Hero } from "../components/Hero/Hero";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { CategoriesList } from "../components/Categories/CategoriesList";
import { BusinessesList } from "../components/Business/BusinessesList";

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
