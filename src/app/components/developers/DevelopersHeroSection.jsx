import Image from "next/image";
import Button from "@/app/components/shared/Button";
import styles from "./DevelopersHeroSection.module.css";

export default function DevelopersHeroSection({
  img: { src, alt = "" },
  title,
  description,
  buttons,
}) {
  return (
    <section className={`pt-10 lg:pt-32 md:pb-32 ${styles["hero-section"]}`}>
      <div className="container relative">
        <div className={styles["hero-section__image"]}>
          <Image src={src} alt={alt} width={1954} height={1955} priority />
        </div>
        <div className={styles["hero-section__light"]} />
        <div className={styles["content"]}>
          <h1 className="h2">{title}</h1>
          <p className="h6 subdued">{description}</p>
          {buttons && (
            <div className={styles["content__hero-buttons"]}>
              {buttons?.cta && (
                <Button
                  to={buttons.cta.href}
                  newTab={buttons.cta.href?.startsWith("http")}
                  prefetch={buttons.cta.prefetch}
                  variant="secondary"
                >
                  {buttons.cta.label}
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  to={buttons.secondary.href}
                  newTab={buttons.secondary.href?.startsWith("http")}
                  prefetch={buttons.secondary.prefetch}
                  className={
                    buttons.secondary.icon
                      ? styles["content__btn-icon"]
                      : undefined
                  }
                >
                  <span>{buttons.secondary.label}</span>
                  {buttons.secondary.icon || null}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}