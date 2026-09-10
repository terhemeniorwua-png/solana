import { ArrowDownRight } from "@boxicons/react/ArrowDownRight";
import Link from "@/lib/Link";

const buttonVariants = {
  default:
    "bg-black text-white border border-white [&:not([disabled])]:hover:!bg-white [&:not([disabled])]:hover:text-black [&:not([disabled])]:hover:border-black [&:not([disabled])]:active:!bg-white [&:not([disabled])]:active:text-black [&:not([disabled])]:active:border-black [&:not([disabled])]:focus:!bg-white [&:not([disabled])]:focus:text-black [&:not([disabled])]:focus:border-black",
  secondary:
    "!bg-[#14f195] text-black border border-black [&:not([disabled])]:hover:!bg-white [&:not([disabled])]:hover:text-black [&:not([disabled])]:hover:border-black [&:not([disabled])]:active:!bg-white [&:not([disabled])]:active:text-black [&:not([disabled])]:active:border-black [&:not([disabled])]:focus:!bg-white [&:not([disabled])]:focus:text-black [&:not([disabled])]:focus:border-black",
  tertiary:
    "!bg-[#9945ff] text-white border border-transparent [&:not([disabled])]:hover:!bg-white [&:not([disabled])]:hover:text-black [&:not([disabled])]:hover:border-black [&:not([disabled])]:active:!bg-white [&:not([disabled])]:active:text-black [&:not([disabled])]:active:border-black [&:not([disabled])]:focus:!bg-white [&:not([disabled])]:focus:text-black [&:not([disabled])]:focus:border-black",
  inverted:
    "!bg-[#f9f9fb] text-black border border-black [&:not([disabled])]:hover:!bg-black [&:not([disabled])]:hover:text-white [&:not([disabled])]:hover:border-white [&:not([disabled])]:active:!bg-black [&:not([disabled])]:active:text-white [&:not([disabled])]:active:border-white [&:not([disabled])]:focus:!bg-black [&:not([disabled])]:focus:text-white [&:not([disabled])]:focus:border-white",
  outline:
    "bg-transparent text-white border border-white [&:not([disabled])]:hover:!bg-white [&:not([disabled])]:hover:text-black [&:not([disabled])]:hover:border-black [&:not([disabled])]:active:!bg-white [&:not([disabled])]:active:text-black [&:not([disabled])]:active:border-black [&:not([disabled])]:focus:!bg-white [&:not([disabled])]:focus:text-black [&:not([disabled])]:focus:border-black",
};

const buttonSizes = {
  large: "py-[0.875rem] px-6 rounded-[2.25rem] text-[0.95rem] leading-5",
  medium: "py-[0.625rem] px-[1.3125rem] rounded-3xl text-[0.95rem] leading-5",
  small: "py-[0.3rem] px-[0.6rem] rounded-[2.25rem] text-xs leading-none",
  none: "p-0 rounded-none text-[0.95rem] leading-5",
  default: "py-[0.5625rem] px-4 rounded-[2.25rem] text-[0.95rem] leading-5",
};

const buttonBase =
  "font-brand-mono font-normal uppercase w-fit align-middle cursor-pointer select-none text-center active:translate-y-0 disabled:opacity-65 disabled:pointer-events-none";

export default function Button({
  to,
  newTab = false,
  ariaLabel,
  className,
  variant = "default",
  arrow = false,
  arrowRight = false,
  size = "default",
  noBorder = false,
  children,
  ...props
}) {
  const isDisabled = variant === "disabled";

  const liftClasses = isDisabled
    ? ""
    : "transition-[box-shadow,transform] duration-[250ms] ease-[ease] [&:not([disabled])]:hover:![box-shadow:0_1rem_2.5rem_rgba(35,35,35,0.1),0_0.5rem_1rem_-0.75rem_rgba(35,35,35,0.1)] [&:not([disabled])]:hover:-translate-y-[3px] [&:not([disabled])]:focus:-translate-y-[3px]";

  const noBorderClass =
    noBorder || variant === "captioned" ? "!border-transparent" : "";

  const layoutClass =
    arrow || arrowRight ? "inline-flex items-center" : "inline-block";

  const variantClasses = buttonVariants[variant] || buttonVariants.default;
  const sizeClasses = buttonSizes[size] || buttonSizes.default;

  const disabledClasses =
    "disabled:opacity-[0.65] disabled:pointer-events-none";

  const Tag = to ? Link : "button";
  const tagProps = to
    ? {
        to,
        newTab,
        ariaLabel,
      }
    : { type: "button" };

  return (
    <Tag
      aria-label={ariaLabel}
      className={`${buttonBase} ${variantClasses} ${sizeClasses} ${noBorderClass} ${liftClasses} ${layoutClass} ${disabledClasses} ${className ?? ""}`}
      {...tagProps}
      {...props}
    >
      {arrow && (
        <ArrowDownRight width={11} height={11} className="mr-2" aria-hidden="true" />
      )}
      {children}
      {arrowRight && (
        <ArrowDownRight width={11} height={11} className="ml-2" aria-hidden="true" />
      )}
    </Tag>
  );
}