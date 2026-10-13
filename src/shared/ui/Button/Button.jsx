import { joinClassNames } from "@/shared/lib/classNames.js";
import styles from "./Button.module.css";

const DEFAULT_VARIANT = "primary";
const DEFAULT_SIZE = "md";

function Button({
  variant = DEFAULT_VARIANT,
  size = DEFAULT_SIZE,
  iconLeft: IconLeft,
  iconRight: IconRight,
  href,
  className,
  children,
  ...props
}) {
  const Element = href ? "a" : "button";
  const elementProps = href ? { href } : { type: "button" };
  const classNames = joinClassNames(
    styles.button,
    styles[variant],
    styles[size],
    className,
  );

  return (
    <Element className={classNames} {...elementProps} {...props}>
      {IconLeft && <IconLeft className={styles.glyph} aria-hidden="true" />}
      {children}
      {IconRight && <IconRight className={styles.glyph} aria-hidden="true" />}
    </Element>
  );
}

export default Button;
