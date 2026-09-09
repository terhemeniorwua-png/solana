import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import EventsCarousel from "./components/EventsCarousel";
import Performance from "./components/Performance";
import NewsCarousel from "./components/NewsCarousel";
import Institutions from "./components/Institutions";
import BlogGrid from "./components/BlogGrid";
import VideoStories from "./components/VideoStories";
import CommunityCTA from "./components/CommunityCTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-[#000000] text-[#F5F5F5]">
      <Hero />
      <LogoStrip />
      <EventsCarousel />
      <Performance />
      <NewsCarousel />
      <Institutions />
      <BlogGrid />
      <VideoStories />
      <CommunityCTA />
      <Footer />
    </div>
  );
}
