import styles from "./SingleCategory.module.scss";
import PropTypes from "prop-types";

export function SingleCategory({ categories }) {
  return (
    <>
      {categories.map(category => (
        <div key={category.id} className={styles.card}>
          <span>
            <img src={category.url} style={{ width: "50px", height: "50px" }} />
          </span>
          <div>{category.title}</div>
        </div>
      ))}
    </>
  );
}

SingleCategory.propTypes = {
  categories: PropTypes.array.isRequired
};
