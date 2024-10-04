import React from "react";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

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

export const AddIcon = ({ color, size="medium", onClick }: IconProps) => {
  return <AddCircleOutlineRoundedIcon  fontSize={size} color={color} onClick={onClick} />;
};
