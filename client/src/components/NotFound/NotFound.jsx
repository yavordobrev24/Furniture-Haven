import styles from "./NotFound.module.css";
export default function NotFound(props) {
  return (
    <div className={styles["not-found"]}>
      <h1>404</h1>
      <p>Oops! The page you are looking for could not be found.</p>
    </div>
  );
}
