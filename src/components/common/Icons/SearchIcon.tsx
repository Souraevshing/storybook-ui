import React from "react";
import SearchIcon from "@mui/icons-material/Search";

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

export const SearchIcons = ({ color, size="medium", onClick}: IconProps) => {
  return <SearchIcon   fontSize={size} color={color} onClick={onClick} />;
};
