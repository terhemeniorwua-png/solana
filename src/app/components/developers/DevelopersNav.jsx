"use client";

import { createElement } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/Link";
import { BookOpen as DocsIcon } from "@boxicons/react/BookOpen";
import { Code as RpcApiIcon } from "@boxicons/react/Code";
import { Education as CoursesIcon } from "@boxicons/react/Education";
import { Grid as ToolsIcon } from "@boxicons/react/Grid";
import { BarChart as StatisticsIcon } from "@boxicons/react/BarChart";
import { developersCopy } from "@/data/developers";

const localInstallationResourcesPath = "/docs/intro/installation/";

function isActive(pathname, { to, partiallyActive = false, ignore = [], match = [] }) {
  if (match.some((el) => pathname.startsWith(el))) return true;
  return (
    partiallyActive &&
    pathname.includes(to) &&
    !ignore.filter((el) => pathname.startsWith(el)).length
  );
}

function NavLink({ to, partiallyActive, ignore, match, icon, children }) {
  const pathname = usePathname();
  const active = isActive(pathname, {
    to,
    partiallyActive,
    ignore: ignore || [],
    match: match || [],
  });

  return (
    <Link
      to={to}
      prefetch={false}
      className={`!no-underline !text-[#848895] inline-block rounded-md px-[10px] py-[2px] !border border-transparent hover:!text-white mr-[5px] last:mr-0${
        active
          ? " !text-white bg-[#0c011d] border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.2)]"
          : ""
      }`}
    >
      <span className="inline-block mr-2 align-middle">{createElement(icon, { height: 16, width: 16 })}</span>
      <span className="align-middle">{children}</span>
    </Link>
  );
}

export default function DevelopersNav({ containerClassName = "" }) {
  return (
    <div
      data-developers-nav
      className="relative z-[1] text-[0.85em] bg-[rgb(18_18_18/95%)] transition-colors duration-300 ease-in-out text-[#ababbc] border-t border-b border-[rgba(255,255,255,0.05)]"
    >
      <div className={`mx-auto w-full max-w-[1440px] ${containerClassName}`}>
        <div className="py-2 text-[17px] font-light ml-3 xl:ml-0">
          <div className="flex items-center">
            <nav className="flex flex-wrap items-center">
              <NavLink
                partiallyActive
                to="/docs"
                ignore={[
                  "/docs/core",
                  "/docs/tokens",
                  "/docs/references",
                  "/docs/rpc",
                  "/docs/finance",
                  "/docs/payments",
                  "/docs/tokenization",
                  "/docs/defi",
                  "/docs/tools",
                  localInstallationResourcesPath,
                ]}
                icon={DocsIcon}
              >
                {developersCopy.nav.quickstart}
              </NavLink>
              <NavLink to="/docs/core" icon={CoursesIcon}>
                {developersCopy.nav.concepts}
              </NavLink>
              <NavLink to="/docs/rpc" icon={RpcApiIcon}>
                {developersCopy.nav.rpc}
              </NavLink>
              <NavLink
                partiallyActive
                to="/docs/finance"
                match={["/docs/tokens", "/docs/tokenization", "/docs/payments", "/docs/defi"]}
                icon={StatisticsIcon}
              >
                {developersCopy.nav.finance}
              </NavLink>
              <NavLink
                partiallyActive
                to="/docs/tools"
                match={["/docs/references", localInstallationResourcesPath]}
                icon={ToolsIcon}
              >
                {developersCopy.nav.resources}
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}