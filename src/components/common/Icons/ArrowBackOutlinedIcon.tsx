import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

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

export const ArrowBackOutlinedIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <ArrowBackOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
