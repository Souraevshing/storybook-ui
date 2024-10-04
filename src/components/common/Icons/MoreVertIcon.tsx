import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

export const MoreVertIcons = ({ color, size= "medium", onClick }: IconProps) => {
  return <MoreVertIcon  fontSize={size} color={color} onClick={onClick} />;
};
