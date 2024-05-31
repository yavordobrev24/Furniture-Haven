import { useState } from "react";
import styles from "./CategoryPage.module.css";
import { useParams } from "react-router-dom";

export default function CategoryPage(props) {
  const params = useParams();
  console.log(params);
  const [category, setCategory] = useState("all");
  return (
    <>
      <div className={styles.categories}>
        <button className={styles["category-card"]}>All</button>
        <button className={styles["category-card"]}>Kitchen</button>
        <button className={styles["category-card"]}>Living room</button>
        <button className={styles["category-card"]}>Bedroom</button>
      </div>
    </>
  );
}
