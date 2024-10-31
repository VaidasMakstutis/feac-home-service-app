import { Hero } from "../components/Hero/Hero";
import { InputSearch } from "../components/InputSearch/InputSearch";
import { CategoriesList } from "../components/Categories/CategoriesList";
import { BusinessList } from "../components/Business/BusinessList";

export function Home() {
  return (
    <>
      <Hero />
      <InputSearch />
      <CategoriesList />
      <BusinessList />
    </>
  );
}
