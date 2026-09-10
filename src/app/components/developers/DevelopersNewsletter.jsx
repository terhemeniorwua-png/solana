import DevelopersEmailSubscribeForm from "./DevelopersEmailSubscribeForm";
import {
  DevelopersContentContainer,
  DevelopersContentTitle,
  DevelopersContentDescription,
} from "./DevelopersContent";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersNewsletter.module.css";

export default function DevelopersNewsletter() {
  return (
    <DevelopersContentContainer>
      <div>
        <DevelopersContentTitle>
          {developersCopy.content.newsletter.title}
        </DevelopersContentTitle>
        <DevelopersContentDescription>
          {developersCopy.content.newsletter.description}
        </DevelopersContentDescription>
      </div>
      <div className={styles["signup-form"]}>
        <DevelopersEmailSubscribeForm formId="f1bc79b9-a1cd-463a-8c2c-e761b2fa108d" />
      </div>
    </DevelopersContentContainer>
  );
}