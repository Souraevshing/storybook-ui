import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

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

export const MenuIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <MenuIcon  fontSize={size} color={color} onClick={onClick} />;
};
