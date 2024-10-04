import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

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

export const KeyboardArrowDownOutlinedIcons = ({
  color,
  size="medium",
  onClick,
}: IconProps) => {
  return <KeyboardArrowDownOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
