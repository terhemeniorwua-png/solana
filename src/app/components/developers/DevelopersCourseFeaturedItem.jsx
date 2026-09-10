import { ArrowRightCircle } from "@boxicons/react/ArrowRightCircle";
import { InlineLink } from "@/lib/Link";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersCourseFeaturedItem.module.css";

export default function DevelopersCourseFeaturedItem({
  title,
  description,
  courseCreator,
  url,
  image,
  className,
}) {
  return (
    <InlineLink
      to={url}
      className={`${styles["course-item"]} ${className || ""}`}
      style={{
        backgroundColor: "rgba(9, 10, 12, 0.96)",
        backgroundImage: `url("${image}")`,
        backgroundSize: "auto 100%",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`container ${styles["course-item__content"]}`}>
        <div className={styles["details"]}>
          {courseCreator ? (
            <div className={styles["details__pill"]}>
              <span>By {courseCreator}</span>
            </div>
          ) : null}
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles["cta"]}>
            <button
              className="btn btn-sm btn-link p-0"
              aria-label={developersCopy.courses.ariaLabel}
            >
              <ArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
      <div className={styles["shadow"]} />
    </InlineLink>
  );
}