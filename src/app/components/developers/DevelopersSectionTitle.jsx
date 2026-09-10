import styles from "./DevelopersSectionTitle.module.css";

export default function DevelopersSectionTitle({ title }) {
  return <h2 className={styles["section-title"]}>{title}</h2>;
}