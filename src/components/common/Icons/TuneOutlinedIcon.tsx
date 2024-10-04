import React from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

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

export const TuneOutlinedIcons = ({ color,  size="medium", onClick }: IconProps) => {
  return <TuneOutlinedIcon   fontSize={size} color={color} onClick={onClick} />;
};
