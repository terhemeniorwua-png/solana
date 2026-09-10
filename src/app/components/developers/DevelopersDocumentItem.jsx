import { ArrowUpRight } from "@boxicons/react/ArrowUpRight";
import { ArrowOutUpRightSquare } from "@boxicons/react/ArrowOutUpRightSquare";
import Button from "@/app/components/shared/Button";
import { developersCopy } from "@/data/developers";
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
          prefetch={false}
          className={styles["document-item__cta"]}
          aria-label={ctaLabel || developersCopy.documents.viewAll}
        >
          <span>{ctaLabel || developersCopy.documents.viewAll}</span>
          {newTab ? <ArrowOutUpRightSquare /> : <ArrowUpRight />}
        </Button>
      </div>
      <p className={styles["document-item__description"]}>{description}</p>
    </div>
  );
}