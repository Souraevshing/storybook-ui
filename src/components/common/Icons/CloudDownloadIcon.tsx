import React from "react";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

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

export const CloudDownloadIcons = ({ color, size="medium", onClick }: IconProps) => {
  return <CloudDownloadOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
