import React from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

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

export const ArrowBackIosNewOutlinedIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <ArrowBackIosNewOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
