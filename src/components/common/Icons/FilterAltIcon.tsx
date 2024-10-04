import React from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

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

export const FilterAltIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <FilterAltOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
