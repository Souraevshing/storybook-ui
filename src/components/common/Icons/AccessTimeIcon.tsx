import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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

export const AccessTimeIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <AccessTimeIcon fontSize={size} color={color} onClick={onClick} />;
};
