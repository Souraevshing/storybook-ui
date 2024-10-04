import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

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

export const CheckCircleOutlineIcons = ({ color, size = "medium", onClick }: IconProps) => {
  return <CheckCircleOutlineIcon  fontSize={size} color={color} onClick={onClick} />;
};
