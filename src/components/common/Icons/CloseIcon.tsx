import React from "react";
import CloseIcon from "@mui/icons-material/Close";

type IconProps = {
  color?:
    | "inherit"
    | "disabled"
    | "action"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  size?: "inherit" | "small" | "medium" | "large";
  onClick?: () => void;
};

export const CloseIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <CloseIcon  fontSize={size} color={color} onClick={onClick} />;
};
