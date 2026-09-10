import DevelopersCarouselCards from "./DevelopersCarouselCards";
import DevelopersResourceItem from "./DevelopersResourceItem";
import DevelopersSectionTitle from "./DevelopersSectionTitle";
import Button from "@/app/components/shared/Button";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersResourcesSection.module.css";

export default function DevelopersResourcesSection({
  items,
  baseHref = "/docs",
  translationKey = "guides",
  title,
  description,
}) {
  return (
    <section className="mt-20 md:mt-32" id={translationKey}>
      <div className="container">
        <div className="md:flex items-center justify-between mb-8">
          <div>
            <DevelopersSectionTitle title={title} />
            <p className="subdued">{description}</p>
          </div>
          <Button className="text-nowrap md:ml-4" to={baseHref} prefetch={false}>
            {developersCopy.documents.viewAll}
          </Button>
        </div>
        <div className={styles["carousel-container"]}>
          <DevelopersCarouselCards>
            <ResourceCards items={items} />
          </DevelopersCarouselCards>
        </div>
        <div className={styles["grid-container"]}>
          <ResourceCards items={items} />
        </div>
      </div>
    </section>
  );
}

function ResourceCards({ items }) {
  return (
    <>
      {items.map((item, id) => (
        <DevelopersResourceItem
          key={id}
          category={item.category || item.difficulty}
          title={item.title}
          description={item.description}
          url={item.href}
          isExternal={item.isExternal}
        />
      ))}
    </>
  );
}