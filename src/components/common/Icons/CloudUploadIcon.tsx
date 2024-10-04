import React from "react";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

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

export const CloudUploadIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <CloudUploadOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
