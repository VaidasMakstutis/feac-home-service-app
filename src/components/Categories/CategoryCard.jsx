import { useNavigate, useParams, generatePath } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import styles from "./CategoryCard.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

export function CategoryCard({ category, className }) {
  const params = useParams();
  const { name } = category;
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: name });
  const activeCategory = params.category;

  return (
    <>
      <div className={classNames(styles.card, activeCategory === name && styles.active, className)} onClick={() => navigate(categoryPath)}>
        <img src={category.url} className={styles.image} style={{ width: "50px", height: "50px" }} />
        <div className={styles.name}>{category.name}</div>
      </div>
    </>
  );
}

CategoryCard.propTypes = {
  category: PropTypes.object.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};
