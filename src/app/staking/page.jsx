import { stakingData } from "@/data/staking";
import HtmlParser from "./HtmlParser";
import AccordionSection from "./AccordionSection";
import styles from "./staking.module.css";

export const metadata = {
  title: stakingData.metaSeoTitle,
  description: stakingData.metaSeoDescription,
};

export const revalidate = 604800;

export default function StakingPage() {
  return (
    <main>
      <div className={styles.heroWrap}>
        <div className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.heroWrapper}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroHeadline}>{stakingData.heroHeadline}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <HtmlParser rawHtml={stakingData.overview} className={styles.htmlParser} />
        <AccordionSection sections={stakingData.sections} />
      </div>
    </main>
  );
}