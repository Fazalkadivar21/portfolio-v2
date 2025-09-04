import styles from "./style.module.scss";

export default function Index({ isOpen, setOpen }) {
  return (
    <div className={styles.header}>
      {" "}
      <div
        onClick={() => setOpen(!isOpen)}
        className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}
      ></div>
    </div>
  );
}
