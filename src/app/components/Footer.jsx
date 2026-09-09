"use client";
import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Use Solana",
    links: [
      { label: "Use Solana", href: "/use-solana" },
      { label: "Wallets", href: "/wallets" },
      { label: "Learn", href: "/learn" },
      { label: "Staking", href: "/staking" },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Developer hub", href: "/developers" },
      { label: "Docs", href: "/docs" },
      { label: "Templates", href: "/developers/templates" },
    ],
  },
  {
    title: "Enterprise",
    links: [
      { label: "Enterprise", href: "/enterprise" },
      { label: "Institutional payments", href: "/solutions/institutional-payments" },
      { label: "Tokenization", href: "/solutions/tokenization" },
      { label: "Reports", href: "/reports" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Products", href: "/products" },
      { label: "Solana Developer Platform", href: "/solutions/sdp" },
      { label: "x402", href: "/x402" },
      { label: "Agent Registry", href: "/agent-registry" },
      { label: "Skills", href: "/skills" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Network", href: "/network" },
      { label: "Events", href: "/events" },
      { label: "Community", href: "/community" },
      { label: "News", href: "/news" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "AI agents",
    links: [
      { label: "llms.txt", href: "/llms.txt" },
      { label: "llms-full.txt", href: "/llms-full.txt" },
      { label: "SKILL.md", href: "/SKILL.md" },
      { label: "Agent skills", href: "/skills" },
    ],
  },
];

const BOTTOM_LINKS = [
  { label: "Grants", href: "https://solana.org/grants", external: true },
  { label: "Media Kit", href: "/branding" },
  { label: "Careers", href: "https://jobs.solana.com/", external: true },
  { label: "Disclaimer", href: "/tos" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const SOCIALS = [
  {
    name: "YouTube",
    href: "/youtube",
    paths: [
      "M23.3 7.3c0-.2-.3-1.8-1-2.5-.9-1-1.9-1.1-2.4-1.1h-.1c-3.1-.2-7.7-.2-7.8-.2 0 0-4.7 0-7.8.2h-.1c-.5 0-1.5.1-2.4 1.1-.7.8-1 2.4-1 2.6 0 .1-.2 1.9-.2 3.8v1.7c0 1.9.2 3.7.2 3.8 0 .2.3 1.8 1 2.5.8.9 1.8 1 2.4 1.1h.3c1.8.2 7.3.2 7.5.2 0 0 4.7 0 7.8-.2h.1c.5-.1 1.5-.2 2.4-1.1.7-.8 1-2.4 1-2.6 0-.1.2-1.9.2-3.8v-1.7c.1-1.8-.1-3.7-.1-3.8m-7.4 4.9-6 3.2c-.1 0-.1.1-.2.1s-.2 0-.2-.1c-.1-.1-.2-.2-.2-.4V8.5c0-.2.1-.3.2-.4s.3-.1.5 0l6 3.2c.2.1.3.2.3.4s-.2.4-.4.5",
    ],
    size: 20,
    vb: "0 0 24 24",
  },
  {
    name: "Twitter",
    href: "/twitter",
    paths: [
      "M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z",
    ],
    size: 16,
    vb: "0 0 16 16",
  },
  {
    name: "Discord",
    href: "/discord",
    paths: [
      "M11.343 5.177c-1.076 0-4.32 1.316-4.902 1.579S5.213 7.84 4.48 9.195s-1.323 2.939-2.28 5.269-1.179 6.822-1.147 8.193.189 2.442 1.594 3.253c1.404.81 2.646 1.658 3.953 2.168 1.308.51 2.2.877 2.806.367s1.005-1.403 1.005-1.403.574-.797-.51-1.275c-1.084-.479-1.626-.814-1.579-1.308.048-.494.127-.765.398-.701s.91 1.211 3.365 1.737 4.848.447 4.848.447 2.394.08 4.849-.447c2.455-.526 3.093-1.673 3.364-1.737s.35.207.398.7c.048.495-.494.83-1.578 1.309-1.084.478-.51 1.275-.51 1.275s.399.892 1.005 1.403c.605.51 1.498.143 2.805-.367s2.55-1.357 3.954-2.168 1.562-1.882 1.594-3.253c.032-1.37-.191-5.863-1.148-8.193s-1.546-3.914-2.28-5.269c-.732-1.355-1.379-2.176-1.96-2.44-.582-.262-3.827-1.578-4.903-1.578s-1.394.75-1.394.75l-.375.829s-2.52-.479-3.804-.48c-1.284 0-3.837.48-3.837.48l-.375-.83s-.318-.749-1.395-.749m.117 9.948h.04c1.569 0 2.84 1.373 2.84 3.066 0 1.694-1.271 3.066-2.84 3.066s-2.84-1.372-2.84-3.066c-.001-1.677 1.247-3.043 2.8-3.066m10.907 0h.04c1.553.023 2.8 1.39 2.8 3.066 0 1.694-1.271 3.066-2.84 3.066-1.57 0-2.84-1.372-2.84-3.066s1.27-3.066 2.84-3.066",
    ],
    size: 20,
    vb: "0 0 24 24",
  },
  {
    name: "Reddit",
    href: "/reddit",
    paths: [
      "M16.634 2.901a2.068 2.068 0 0 1-4.08.476 2.47 2.47 0 0 0-2.126 2.44v.008c1.849.07 3.54.59 4.879 1.419a2.918 2.918 0 1 1 3.03 4.95c-.091 3.391-3.785 6.119-8.328 6.119-4.54 0-8.23-2.723-8.328-6.11A2.918 2.918 0 1 1 4.7 7.25c1.327-.824 3-1.345 4.83-1.422v-.01a3.365 3.365 0 0 1 3.011-3.341 2.068 2.068 0 0 1 4.092.424m-10.658 10c.818 0 1.52-.382 1.569-1.433v.001c.048-1.05-.575-1.927-1.393-1.927s-1.52.687-1.569 1.738.575 1.62 1.393 1.62m8.061 0c-.818 0-1.52-.382-1.569-1.433v.001c-.048-1.05.575-1.927 1.393-1.927s1.52.687 1.57 1.738c.048 1.05-.576 1.62-1.394 1.62m-4.031.816c-1.014 0-1.986.05-2.883.142a.23.23 0 0 0-.191.317 3.333 3.333 0 0 0 6.148 0 .23.23 0 0 0-.191-.317 29 29 0 0 0-2.883-.142",
    ],
    size: 20,
    vb: "0 0 20 20",
  },
  {
    name: "GitHub",
    href: "/github",
    paths: [
      "M24 0C10.747 0 0 11.017 0 24.607c0 10.873 6.877 20.097 16.413 23.35 1.2.228 1.64-.533 1.64-1.183 0-.587-.023-2.525-.033-4.581-6.677 1.488-8.086-2.904-8.086-2.904-1.092-2.844-2.665-3.6-2.665-3.6-2.177-1.528.165-1.496.165-1.496 2.41.173 3.679 2.535 3.679 2.535 2.14 3.762 5.614 2.675 6.984 2.046.215-1.59.837-2.676 1.523-3.29-5.33-.623-10.934-2.733-10.934-12.162 0-2.686.937-4.882 2.473-6.605-.25-.62-1.071-3.123.232-6.512 0 0 2.016-.661 6.602 2.522 1.914-.545 3.968-.818 6.007-.828 2.04.01 4.095.283 6.013.828 4.58-3.183 6.593-2.522 6.593-2.522 1.306 3.39.484 5.892.235 6.512 1.54 1.723 2.47 3.919 2.47 6.605 0 9.452-5.614 11.533-10.959 12.142.861.764 1.628 2.261 1.628 4.557 0 3.292-.027 5.942-.027 6.753 0 .655.432 1.422 1.648 1.18C41.132 44.697 48 35.476 48 24.607 48 11.017 37.255 0 24 0",
      "M9.09 35.331c-.053.123-.24.159-.411.075-.174-.08-.272-.247-.216-.37.052-.126.24-.16.414-.077.174.081.273.25.213.372m.972 1.112c-.114.108-.338.058-.49-.114-.157-.172-.186-.401-.07-.511.118-.11.335-.058.492.113.157.174.188.402.068.512m.946 1.417c-.146.105-.387.007-.536-.212-.147-.22-.147-.482.004-.587.149-.105.385-.01.536.207.147.222.147.485-.004.592m1.297 1.37c-.132.148-.412.108-.617-.095-.21-.198-.268-.48-.136-.629.133-.149.415-.107.621.094.209.198.272.482.132.63m1.788.794c-.058.193-.328.28-.6.199-.27-.085-.448-.31-.394-.505.057-.194.328-.286.602-.198.27.084.449.308.392.504m1.965.148c.006.203-.224.37-.51.374-.287.007-.519-.157-.522-.357 0-.205.226-.371.512-.376s.52.157.52.359m1.827-.319c.034.198-.164.401-.447.455-.279.052-.537-.07-.572-.266-.035-.203.167-.407.445-.46.284-.05.538.07.574.27Z",
    ],
    size: 20,
    vb: "0 0 48 48",
  },
];

const Wordmark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="210" height="35" fill="none" className="block w-[140px] xl:w-[170px] h-auto" viewBox="0 0 210 35" preserveAspectRatio="xMinYMid meet">
    <g clipPath="url(#solana-footer-wordmark-clip)">
      <path fill="#fff" d="M67.245 3.493H55.6V6.37h8.55a3.13 3.13 0 0 1 2.19.895 3.03 3.03 0 0 1 .906 2.164v2.513a3.01 3.01 0 0 1-.902 2.167A3.09 3.09 0 0 1 64.15 15H52.687v-2.877h11.647V9.248h-8.55a3.13 3.13 0 0 1-2.19-.896 3.05 3.05 0 0 1-.907-2.164V3.675a3.01 3.01 0 0 1 .903-2.167 3.1 3.1 0 0 1 2.194-.891h11.461zM81.363.616c1.722 0 3.117 1.358 3.117 3.06v8.265c0 1.702-1.395 3.06-3.117 3.06h-8.96a3.11 3.11 0 0 1-2.194-.892 3.04 3.04 0 0 1-.902-2.168V3.675a3 3 0 0 1 .902-2.168 3.08 3.08 0 0 1 2.194-.891zm.184 2.877h-9.329v8.63h9.33zm8.117 8.53h11.359v3.1H88.536a2.03 2.03 0 0 1-1.42-.583 1.98 1.98 0 0 1-.59-1.403V.494h3.138zM115.717.615c1.394 0 2.522 1.094 2.522 2.472V15h-2.933v-4.72h-9.329V15h-2.912V3.088A2.46 2.46 0 0 1 104.607.8c.305-.124.631-.186.96-.184zm-.411 2.877h-9.329v3.91h9.329zm17.22-2.877h2.933v12.52c0 1.034-.862 1.864-1.908 1.864h-2.255a1.82 1.82 0 0 1-1.681-.992l-5.659-10.515h-.759V15h-2.912V2.5c0-1.053.841-1.884 1.887-1.884h2.379c.697 0 1.353.365 1.681.993l5.658 10.514h.636V.617Zm17.63 0c1.395 0 2.522 1.094 2.522 2.472V15h-2.932v-4.72h-9.329V15h-2.912V3.088A2.46 2.46 0 0 1 139.047.8c.305-.124.631-.186.96-.184zm-.41 2.877h-9.329v3.91h9.329zm-82.788 18.75H55.6v2.877h11.36v2.877H55.6v5.753h-2.911V19.366h14.27v2.877Zm14.105-2.877c1.722 0 3.116 1.358 3.116 3.06v8.265c0 1.702-1.394 3.06-3.116 3.06h-8.96a3.1 3.1 0 0 1-2.195-.892 3 3 0 0 1-.902-2.168v-8.266a3 3 0 0 1 .902-2.168 3.1 3.1 0 0 1 2.194-.892zm.184 2.877h-9.33v8.63h9.33zm17.22-2.877h2.932v9.563c-.021 2.674-2.194 4.821-4.9 4.821h-5.393a4.9 4.9 0 0 1-1.87-.363 4.9 4.9 0 0 1-1.585-1.045 4.8 4.8 0 0 1-1.057-1.566 4.8 4.8 0 0 1-.368-1.848v-9.562h2.912v8.975c0 .672.27 1.316.75 1.79a2.58 2.58 0 0 0 1.813.742h4.203a2.58 2.58 0 0 0 1.812-.741c.48-.475.75-1.12.75-1.791zm17.22 0h2.932v12.52c0 1.034-.861 1.864-1.907 1.864h-2.255a1.83 1.83 0 0 1-1.682-.992l-5.659-10.515h-.758V33.75h-2.912v-12.5c0-1.053.841-1.884 1.886-1.884h2.379c.697 0 1.353.365 1.681.993l5.659 10.514h.636V19.367Zm15.251 0c2.707 0 4.88 2.168 4.901 4.822v4.74c-.021 2.675-2.194 4.822-4.901 4.822h-10.272V19.366h10.272Zm1.969 5.43a2.553 2.553 0 0 0-2.563-2.553h-6.766v8.63h6.766a2.58 2.58 0 0 0 1.812-.742 2.52 2.52 0 0 0 .751-1.79v-3.546Zm17.63-5.43c1.394 0 2.522 1.094 2.522 2.472V33.75h-2.932v-4.72h-9.329v4.72h-2.912V21.838a2.43 2.43 0 0 1 .728-1.753 2.48 2.48 0 0 1 1.773-.719h10.15Zm-.41 2.877h-9.329v3.91h9.329zm4.979-2.877h14.557v2.877h-5.823V33.75h-2.911V22.243h-5.823v-2.877Zm19.531 14.384h-2.912V19.366h2.912zm14.11-14.384c1.722 0 3.116 1.358 3.116 3.06v8.265c0 1.702-1.394 3.06-3.116 3.06h-8.96a3.1 3.1 0 0 1-2.194-.892 3 3 0 0 1-.902-2.168v-8.266a3 3 0 0 1 .902-2.168 3.1 3.1 0 0 1 2.194-.892zm.184 2.877h-9.329v8.63h9.329zm17.22-2.877h2.932v12.52c0 1.034-.861 1.864-1.906 1.864h-2.256a1.82 1.82 0 0 1-1.681-.992l-5.659-10.515h-.759V33.75h-2.911v-12.5c0-1.053.84-1.884 1.886-1.884h2.378c.697 0 1.354.365 1.681.993l5.66 10.514h.635V19.367Z" />
      <mask id="solana-footer-wordmark-mask" width="38" height="35" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }}>
        <path fill="#fff" d="M0 .934h37.594v33.28H0V.935Z" />
      </mask>
      <g mask="url(#solana-footer-wordmark-mask)">
        <path fill="url(#solana-footer-wordmark-gradient)" d="m37.4 27.173-6.205 6.588a1.44 1.44 0 0 1-1.055.454H.722a.73.73 0 0 1-.552-.253.71.71 0 0 1 .025-.947l6.21-6.588a1.44 1.44 0 0 1 1.052-.453h29.418a.73.73 0 0 1 .66.429.71.71 0 0 1-.135.77m-6.205-13.266a1.44 1.44 0 0 0-1.055-.454H.722a.73.73 0 0 0-.553.253.71.71 0 0 0 .025.947l6.211 6.588a1.44 1.44 0 0 0 1.051.454h29.418a.73.73 0 0 0 .551-.254.707.707 0 0 0-.025-.946zM.721 9.174H30.14a1.45 1.45 0 0 0 1.054-.454L37.4 2.133a.71.71 0 0 0-.527-1.2H7.457a1.45 1.45 0 0 0-1.051.453L.196 7.974a.71.71 0 0 0 .525 1.2" />
      </g>
    </g>
    <defs>
      <linearGradient id="solana-footer-wordmark-gradient" x1="3.174" x2="33.674" y1="35.008" y2="0.274" gradientUnits="userSpaceOnUse">
        <stop offset="0.08" stopColor="#9945FF" />
        <stop offset="0.3" stopColor="#8752F3" />
        <stop offset="0.5" stopColor="#5497D5" />
        <stop offset="0.6" stopColor="#43B4CA" />
        <stop offset="0.72" stopColor="#28E0B9" />
        <stop offset="0.97" stopColor="#19FB9B" />
      </linearGradient>
      <clipPath id="solana-footer-wordmark-clip">
        <path fill="#fff" d="M0 0h210v35H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default function Footer() {
  return (
    <div className="relative bg-black text-base text-white [&_ul_a]:inline-block [&_ul_a]:text-sm [&_ul_a]:md:text-[15px] [&_ul_a]:font-normal [&_ul_a]:leading-[1.5] [&_ul_li+li]:mt-3">
      <div
        className="w-full max-w-[1440px] px-5 md:px-8 xl:px-[72px] pt-16 md:pt-20 xl:pt-24 pb-[136px] md:pb-[164px] xl:pb-[320px] mx-auto bg-[length:100%_auto] bg-bottom md:bg-[position:center_120%] xl:bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url(/img/decor-bg.svg)" }}
      >
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-10 md:pb-14 xl:pb-16 border-b border-white/[0.08]">
          <Link
            aria-label="Solana Foundation"
            className="!no-underline !text-white hover:!text-white inline-block"
            href="/"
          >
            <Wordmark />
          </Link>
          <button
            className="p-0 border-0 inline-flex items-center h-9 text-[#848895] text-base hover:text-white transition-colors duration-200 !text-white/55 hover:!text-white"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="none" viewBox="0 0 16 16">
              <path stroke="#ABABBA" strokeLinecap="square" d="M8 14.333A6.333 6.333 0 1 0 8 1.667m0 12.666A6.333 6.333 0 1 1 8 1.667m0 12.666c-1.473 0-2.667-2.835-2.667-6.333s1.194-6.333 2.666-6.333m0 12.666c1.473 0 2.667-2.835 2.667-6.333S9.472 1.667 7.999 1.667M14 8H2" />
            </svg>
            <span className="mx-1 align-middle text-base font-normal uppercase">en</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" d="m6.666 7.5 3.333-3.333L13.333 7.5M13.333 12.5l-3.334 3.333L6.666 12.5" />
            </svg>
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-12 md:gap-y-14 pt-10 md:pt-14 xl:pt-16">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="col-span-1">
              <div className="mb-5 md:mb-6 font-brand-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                {col.title}
              </div>
              <ul className="list-unstyled m-0">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="!no-underline !text-white/70 hover:!text-white transition-colors duration-200"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-14 md:mt-20 xl:mt-24 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-x-8 gap-y-5">
            <ul className="list-unstyled m-0 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs [&_li+li]:!mt-0 [&_a]:!text-xs">
              {BOTTOM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="!no-underline !text-white/55 hover:!text-white transition-colors duration-200 whitespace-nowrap"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center -ml-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="!no-underline !text-white/55 hover:!text-white transition-colors duration-200 inline-flex p-2.5 [&_svg]:m-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={social.size} height={social.size} fill="currentColor" viewBox={social.vb}>
                    {social.paths.map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-5">
            <span className="text-white/45 text-xs leading-relaxed">
              &copy; 2026 Solana Foundation. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}