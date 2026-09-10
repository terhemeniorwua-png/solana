import DevelopersNav from "@/app/components/developers/DevelopersNav";

export const metadata = {
  title: "Solana Developer Bootcamp | Solana",
  description:
    "Video-first Solana learning library featuring the 2026 bootcamp plus focused courses like Solana Crashcourse and DePIN.",
};

const crashCourses = [
  {
    title: "Solana Crashcourse",
    href: "/developers/bootcamp/solana-crashcourse",
    description:
      "A lighter-weight path for the roadmap, environment setup, and a first deployed app on Solana.",
  },
  {
    title: "DePIN",
    href: "/developers/bootcamp/depin",
    description:
      "A hardware and automation course built around Raspberry Pi, AI workflows, webhooks, and Solana-connected devices.",
  },
];

const bootcampTracks = [
  {
    title: "Foundations",
    href: "/developers/bootcamp/foundations",
    description:
      "Start with the Solana mental model, local setup, and your first project builds.",
  },
  {
    title: "Program Patterns",
    href: "/developers/bootcamp/program-patterns",
    description:
      "Move into reusable onchain patterns for state, escrow, token flows, swaps, and security.",
  },
  {
    title: "Fullstack Applications",
    href: "/developers/bootcamp/fullstack-apps",
    description:
      "Connect onchain programs to app UX and ship complete user-facing flows.",
  },
  {
    title: "Shipping & Production",
    href: "/developers/bootcamp/shipping-production",
    description:
      "Finish with production readiness, hardening, and operational launch practices.",
  },
];

export default function BootcampPage() {
  return (
    <div className="docs-shell">
      <DevelopersNav />
      <div className="overflow-hidden">
        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <p className="font-brand-mono text-[11px] font-medium uppercase tracking-[0.08em] text-nd-mid-em-text">
              Bootcamp
            </p>
            <h1 className="mt-3 nd-heading-2xl text-nd-high-em-text">
              Solana Developer Bootcamp
            </h1>
            <p className="mt-4 max-w-3xl nd-body-l text-nd-mid-em-text">
              Build real Solana skills with a video-first learning library
              designed around practical projects. Solana Developer Bootcamp 2026
              takes you from core foundations through program patterns, fullstack
              apps, and production-ready thinking. If you want a shorter or more
              specialized path, courses like Solana Crashcourse and DePIN help
              you get set up fast, ship your first app, and explore
              hardware-connected projects.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">Courses</h2>
            <div className="mt-10 grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
              {crashCourses.map((course) => (
                <a
                  key={course.title}
                  href={course.href}
                  className="group bg-[#0C0C0E] p-8 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="nd-heading-m text-nd-high-em-text">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm text-nd-mid-em-text">
                    {course.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm text-white underline-offset-4 group-hover:underline">
                    Learn more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1440px] border-b border-white/[0.08] xl:border-x">
          <div className="px-5 py-16 md:px-8 xl:px-12 xl:py-24">
            <h2 className="nd-heading-l text-nd-high-em-text">
              Bootcamp 2026
            </h2>
            <div className="mt-10 grid gap-px border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
              {bootcampTracks.map((track) => (
                <a
                  key={track.title}
                  href={track.href}
                  className="group bg-[#0C0C0E] p-8 transition-colors hover:bg-[#151518]"
                >
                  <h3 className="nd-heading-m text-nd-high-em-text">
                    {track.title}
                  </h3>
                  <p className="mt-3 text-sm text-nd-mid-em-text">
                    {track.description}
                  </p>
                  <span className="mt-4 inline-flex text-sm text-white underline-offset-4 group-hover:underline">
                    Learn more →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
