import NextLink from "next/link";

function isRelativePath(href) {
  return typeof href === "string" && href.startsWith("/") && !href.startsWith("//");
}

function isExternalHref(href) {
  return /^(https?:)?\/\//i.test(href);
}

export function Link({
  children,
  to,
  href,
  className,
  scroll,
  prefetch,
  target,
  rel,
  ...rest
}) {
  const linkTo = to ?? href ?? "";

  if (isRelativePath(linkTo)) {
    return (
      <NextLink
        href={linkTo}
        className={className}
        scroll={scroll}
        prefetch={prefetch}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }

  const resolvedTarget = isExternalHref(linkTo) ? target ?? "_blank" : target;
  const resolvedRel =
    resolvedTarget === "_blank" ? rel ?? "noopener noreferrer" : rel;

  return (
    <a href={linkTo} className={className} target={resolvedTarget} rel={resolvedRel} {...rest}>
      {children}
    </a>
  );
}

export default Link;

export function InlineLink({ to, children, target = "_blank", ...props }) {
  return (
    <a href={to} {...props} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}