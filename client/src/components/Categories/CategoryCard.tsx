import { useNavigate, useParams, generatePath } from "react-router-dom";
import { Category } from "./types";
import { ROUTES } from "../../router/consts";
import classNames from "classnames";
import styles from "./CategoriesList.module.scss";

type CategoryCardProps = {
  category: Category;
  className?: string;
  bgcolor: string;
};

export function CategoryCard({ category, className, bgcolor }: CategoryCardProps) {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <>
      <div
        className={classNames(activeCategory === name && styles.active, className)}
        style={{ background: bgcolor }}
        onClick={() => navigate(categoryPath)}
      >
        <img src={category.icon} style={{ width: "50px", height: "50px" }} />
        <div>{category.name}</div>
      </div>
    </>
  );
}
