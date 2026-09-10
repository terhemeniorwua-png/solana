import DevelopersCourseItem from "./DevelopersCourseItem";
import DevelopersCourseFeaturedItem from "./DevelopersCourseFeaturedItem";
import DevelopersSectionTitle from "./DevelopersSectionTitle";
import DevelopersCarouselCards from "./DevelopersCarouselCards";
import { developersCopy } from "@/data/developers";
import styles from "./DevelopersCoursesSection.module.css";

const IMG = (file) => `/img/developers/courses/${file}`;

const COURSES = [
  {
    title: "Developers Learn Bootcamp",
    creator: "Solana Foundation",
    url: "/developers/bootcamp",
    image: IMG("shape-6.png"),
  },
  {
    title: "Solana Bootcamp",
    creator: "Solana Foundation",
    url: "https://www.youtube.com/watch?v=amAq-WHAFs8&list=PLilwLeBwGuK7HN8ZnXpGAD9q6i4syhnVc",
    image: IMG("shape-5.png"),
  },
  {
    title: "Solana Bytes",
    creator: "Solana Foundation",
    url: "https://www.youtube.com/watch?v=pRYs49MqapI&list=PLilwLeBwGuK51Ji870apdb88dnBr1Xqhm",
    image: IMG("shape-3.png"),
  },
  {
    title: "Build on Solana by Rise In",
    creator: "RiseIn.com",
    url: "https://www.risein.com/courses/build-on-solana",
    image: IMG("shape-1.png"),
  },
  {
    title: "Ethereum to Solana Developer Course",
    creator: "RareSkills.io",
    url: "https://www.rareskills.io/solana-tutorial",
    image: IMG("shape-2.png"),
  },
  {
    title: "Solana Learning Track",
    creator: "Hackquest",
    url: "https://www.hackquest.io/en/learning-track/d22e6118-f7f6-4f31-acf2-433d08bc52e8",
    image: IMG("shape-2.png"),
  },
];

const CourseCards = () => (
  <>
    {COURSES.map((course, id) => (
      <DevelopersCourseItem
        key={id}
        title={course.title}
        courseCreator={course.creator}
        url={course.url}
        image={course.image}
      />
    ))}
  </>
);

export default function DevelopersCoursesSection() {
  return (
    <section className="mt-32 md:mt-0" id="courses">
      <div className="container">
        <div className="mb-8 md:flex items-center justify-between">
          <div>
            <DevelopersSectionTitle title={developersCopy.courses.title} />
            <p className="subdued">{developersCopy.courses.description}</p>
          </div>
        </div>
        <div className={styles["carousel-container"]}>
          <DevelopersCarouselCards>
            <DevelopersCourseItem
              title={developersCopy.courses.featured.title}
              courseCreator={"Blueshift"}
              url="https://learn.blueshift.gg"
              image={IMG("solana-dev-course-small.png")}
            />
            <CourseCards />
          </DevelopersCarouselCards>
        </div>
        <div className={styles["grid-container"]}>
          <DevelopersCourseFeaturedItem
            title={developersCopy.courses.featured.title}
            description={developersCopy.courses.featured.description}
            courseCreator={"Blueshift"}
            url="https://learn.blueshift.gg"
            image={IMG("solana-dev-course.png")}
            className={styles["feature-card"]}
          />
          <CourseCards />
        </div>
      </div>
    </section>
  );
}