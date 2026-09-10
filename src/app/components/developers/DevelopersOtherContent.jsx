import Button from "@/app/components/shared/Button";
import { Youtube } from "@boxicons/react/Youtube";
import { Podcast } from "@boxicons/react/Podcast";
import {
  DevelopersContentContainer,
  DevelopersContentTitle,
  DevelopersContentDescription,
} from "./DevelopersContent";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersOtherContent.module.css";

export default function DevelopersOtherContent() {
  return (
    <DevelopersContentContainer className={styles["container"]}>
      <div>
        <DevelopersContentTitle>
          {developersCopy.content.otherContent.title}
        </DevelopersContentTitle>
        <DevelopersContentDescription>
          {developersCopy.content.otherContent.description}
        </DevelopersContentDescription>
      </div>
      <div className={styles["other-content-links"]}>
        <Button to="/youtube" newTab>
          {developersCopy.content.otherContent.latestVideo}
          <Youtube
            width={26}
            height={19}
            fill="#ED1D24"
            className="ms-2"
            aria-hidden="true"
          />
        </Button>
        <Button to="/validated">
          {developersCopy.content.otherContent.latestEpisode}
          <Podcast
            width={24}
            height={24}
            pack="filled"
            fill="#F452FF"
            className="ms-2"
            aria-hidden="true"
          />
        </Button>
      </div>
    </DevelopersContentContainer>
  );
}