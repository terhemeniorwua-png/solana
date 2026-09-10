import styles from "./DevelopersContent.module.css";

export function DevelopersContentContainer({ className = "", children }) {
  return (
    <div
      className={`${styles["content-container"]} h-100 justify-content-between ${className}`}
    >
      {children}
    </div>
  );
}

export function DevelopersContentTitle({ children }) {
  return <h3 className={styles["content-title"]}>{children}</h3>;
}

export function DevelopersContentDescription({ children }) {
  return (
    <p className={`subdued ${styles["content-description"]}`}>{children}</p>
  );
}