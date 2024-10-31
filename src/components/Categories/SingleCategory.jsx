import { useNavigate, useParams, generatePath } from "react-router-dom";
import { ROUTES } from "../../router/consts";
import styles from "./SingleCategory.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

export function SingleCategory({ category, className }) {
  const params = useParams();
  const { name } = category;
  const nameLowerCase = name.toLowerCase();
  const navigate = useNavigate();

  const categoryPath = generatePath(ROUTES.SEARCH_CATEGORY, { category: nameLowerCase });
  const activeCategory = params.category;

  return (
    <>
      <div className={classNames(styles.card, activeCategory === nameLowerCase && styles.active, className)}>
        <span onClick={() => navigate(categoryPath)}>
          <img className={styles.image} src={category.url} style={{ width: "50px", height: "50px" }} />
        </span>
        <div>{category.name}</div>
      </div>
    </>
  );
}

SingleCategory.propTypes = {
  category: PropTypes.object.isRequired,
  title: PropTypes.string,
  className: PropTypes.string
};
