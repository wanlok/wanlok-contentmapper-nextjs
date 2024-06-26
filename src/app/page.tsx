import CSVImport from "./CSVImport";
import styles from "./page.module.css";

export default function () {
  return (
    <div className={styles.a1}>
      <div className={styles.a2}>1</div>
      <div className={styles.a2}>
        <CSVImport />
        <div>Rows</div>
      </div>
    </div>
  );
}
