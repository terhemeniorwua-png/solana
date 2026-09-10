import { ArrowUpRight } from "@boxicons/react/ArrowUpRight";
import { ArrowOutUpRightSquare } from "@boxicons/react/ArrowOutUpRightSquare";
import { Link, InlineLink } from "@/lib/Link";
import { learnCopy } from "@/data/learn";
import styles from "./DevelopersResourceItem.module.css";

export default function DevelopersResourceItem({
  category = "Resource",
  children = null,
  title,
  description,
  url,
  isExternal,
  ctaLabel,
}) {
  const linkTo = url ?? "#";
  const ResourceLink = isExternal ? InlineLink : Link;

  return (
    <ResourceLink
      to={linkTo}
      prefetch={false}
      className={styles["resource-item"]}
    >
      <div className="flex relative flex-col justify-between">
        <div className={styles["resource-item__container"]}>
          <div className={styles["resource-item__category"]}>{category}</div>
          <div>
            {children}
            {!children && title && (
              <div className={styles["resource-item__title-container"]}>
                <h3 className={styles["resource-item__title"]}>{title}</h3>
              </div>
            )}
            {description && (
              <p
                className={`subdued ${styles["resource-item__description"]}`}
              >
                {description}
              </p>
            )}
          </div>
        </div>
        <div className={styles["resource-item__cta"]}>
          <span>{ctaLabel || learnCopy.developers.resources.learnMore}</span>
          {isExternal ? <ArrowOutUpRightSquare /> : <ArrowUpRight />}
        </div>
      </div>
    </ResourceLink>
  );
}