export function Divider({ hideOnMobile, hideOnDesktop, hideOnTablet, className }) {
  const classes = [
    "w-full",
    className,
    hideOnMobile && "max-md:hidden",
    hideOnDesktop && "xl:hidden",
    hideOnTablet && "md:hidden",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes}>
      <hr className="border-white/10 border-t m-0 !opacity-100" />
    </div>
  );
}