import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "ghost" | "text";

interface BaseProps {
  variant?: ButtonVariant;
  size?: "default" | "lg";
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-btn-primary hover:bg-brand-light hover:shadow-btn-primary-hover hover:-translate-y-px",
  ghost:
    "text-ivory-60 border border-rule hover:text-ivory hover:border-ivory-15 hover:bg-white/[0.04]",
  text: "text-ivory-60 hover:text-ivory",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  default: "px-[26px] py-[13px] text-[15px]",
  lg: "px-8 py-[15px] text-base",
};

export default function Button({
  variant = "primary",
  size = "default",
  children,
  className = "",
  showArrow = false,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-display font-semibold rounded-full whitespace-nowrap transition-all duration-200 ease-out group";

  const classes = `${base} ${
    variant !== "text" ? sizeClasses[size] : ""
  } ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
