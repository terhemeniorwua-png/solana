import { ArrowRightCircle } from "@boxicons/react/ArrowRightCircle";
import { InlineLink } from "@/lib/Link";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersCourseItem.module.css";

export default function DevelopersCourseItem({
  title,
  courseCreator,
  url,
  image,
}) {
  return (
    <InlineLink
      to={url}
      className={`container ${styles["course-item"]}`}
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`container ${styles["course-item__content"]}`}>
        <div className="flex">
          <div className={styles["details"]}>
            {courseCreator ? (
              <div className={styles["details__pill"]}>
                <span>By {courseCreator}</span>
              </div>
            ) : null}
            <h3>{title}</h3>
          </div>
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