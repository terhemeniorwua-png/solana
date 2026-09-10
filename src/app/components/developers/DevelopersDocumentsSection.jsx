import Image from "next/image";
import DevelopersDocumentItem from "./DevelopersDocumentItem";
import DevelopersChangelog from "./DevelopersChangelog";
import DevelopersSectionTitle from "./DevelopersSectionTitle";
import { InlineLink } from "@/lib/Link";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersDocumentsSection.module.css";

const YT_PLAYLIST_CHANGELOG = "PLilwLeBwGuK7gRDfpwQDAz9MfCoczuqQm";

export default function DevelopersDocumentsSection({ latestVideo = null }) {
  return (
    <section className={styles["documents-section"]}>
      <div className="container">
        <div className="mb-12 pt-20">
          <DevelopersSectionTitle title={developersCopy.documents.title} />
          <p className="subdued">{developersCopy.documents.description}</p>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-12 gap-5 md:gap-10">
            <div className="col-span-12 lg:col-span-4">
              <DevelopersDocumentItem
                title={developersCopy.documents.solanaDocs.title}
                description={developersCopy.documents.solanaDocs.description}
                url="/docs"
                newTab={false}
              />
            </div>
            <div className="col-span-12 lg:col-span-4 mt-20 lg:mt-0">
              <DevelopersDocumentItem
                title={developersCopy.documents.anchorDocs.title}
                description={developersCopy.documents.anchorDocs.description}
                url="https://www.anchor-lang.com/"
                newTab={true}
              />
            </div>
            <div className="col-span-12 lg:col-span-4 mt-20 lg:mt-0">
              <DevelopersDocumentItem
                title={developersCopy.documents.solanaTemplates.title}
                description={developersCopy.documents.solanaTemplates.description}
                url="/developers/templates"
                newTab={false}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 md:gap-10 mt-12 lg:mt-32">
            <div className="col-span-12 lg:col-span-6">
              <DevelopersChangelog latestVideo={latestVideo} />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <InlineLink
                to={`https://www.youtube.com/playlist?list=${YT_PLAYLIST_CHANGELOG}`}
              >
                <Image
                  src="/img/developers/documents/changelog.png"
                  alt="Solana Changelog"
                  width={640}
                  height={360}
                />
              </InlineLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}