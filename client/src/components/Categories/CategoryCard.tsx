import { useNavigate, useParams, generatePath } from "react-router-dom";
import { Category } from "./types";
import { ROUTES } from "../../router/consts";
import classNames from "classnames";
import styles from "./CategoryCard.module.scss";
import { IconUrl } from "./IconUrl";

type CategoryCardProps = {
  category: Category;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <>
      <div className={classNames(styles.card, activeCategory === name && styles.active, className)} onClick={() => navigate(categoryPath)}>
        <IconUrl icon={category.icon} style={{ backgroundColor: category.bgcolor }} />
        <div>{category.name}</div>
      </div>
    </>
  );
}
