import React from "react";

type ButtonProps = {
  accent?: "primary" | "secondary" | "link" | "custom";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  customClasses?: string;
  children: React.ReactNode;
};

/**
 * Button component for user interaction
 */
export const Button = ({
  accent = "primary",
  size = "medium",
  customClasses = "",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ fontSize: "14px", borderRadius: "2px" }}
      className={`${[`common-button--${accent}`, `common-button--${size}`].join(
        " "
      )} common-button ${customClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};
