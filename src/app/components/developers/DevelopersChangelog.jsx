import { ArrowRightCircle } from "@boxicons/react/ArrowRightCircle";
import Button from "@/app/components/shared/Button";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersChangelog.module.css";

export default function DevelopersChangelog({ latestVideo }) {
  if (!latestVideo) {
    return null;
  }

  const description = (
    latestVideo.snippet?.description ||
    "Latest changes for the Solana blockchain"
  ).split("---")[0];

  return (
    <div className={styles["changelog"]}>
      <h3 className={styles["changelog__title"]}>Solana Changelog</h3>
      <p className={styles["changelog__description"]}>
        {truncateTextByWord(description, 160, "...")}
      </p>
      {latestVideo.snippet?.resourceId?.videoId &&
      latestVideo.snippet?.playlistId ? (
        <Button
          to={`https://www.youtube.com/watch?v=${latestVideo.snippet?.resourceId?.videoId}&list=${latestVideo.snippet?.playlistId}`}
          newTab
          className={styles["changelog__cta"]}
        >
          <span>{developersCopy.changelog.cta}</span>
          <ArrowRightCircle />
        </Button>
      ) : null}
    </div>
  );
}

function truncateTextByWord(text, maxLength, suffix = "...") {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}${suffix}`;
}