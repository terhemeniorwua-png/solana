import { ArrowUpRight } from "@boxicons/react/ArrowUpRight";
import { ArrowOutUpRightSquare } from "@boxicons/react/ArrowOutUpRightSquare";
import Button from "@/app/components/shared/Button";
import { learnCopy } from "@/data/learn";
import styles from "./DevelopersDocumentItem.module.css";

export default function DevelopersDocumentItem({
  title,
  description,
  url,
  newTab = true,
  ctaLabel,
}) {
  return (
    <div className={styles["document-item"]}>
      <div
        className={`${styles["document-item__header"]} flex justify-between items-center`}
      >
        <h3 className={styles["document-item__title"]}>{title}</h3>
        <Button
          to={url}
          newTab={newTab}
          className={styles["document-item__cta"]}
          aria-label={ctaLabel || learnCopy.developers.documents.viewAll}
        >
          <span>{ctaLabel || learnCopy.developers.documents.viewAll}</span>
          {newTab ? <ArrowOutUpRightSquare /> : <ArrowUpRight />}
        </Button>
      </div>
      <p className={styles["document-item__description"]}>{description}</p>
    </div>
  );
}