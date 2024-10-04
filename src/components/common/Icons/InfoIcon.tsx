import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

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

export const InfoOutlinedIcons = ({ color, size = "medium", onClick }: IconProps) => {
  return <InfoOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
