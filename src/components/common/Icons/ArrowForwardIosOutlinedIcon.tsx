import React from "react";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

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

export const ArrowForwardIosOutlinedIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <ArrowForwardIosOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
