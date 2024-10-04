import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

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

export const NotificationsNoneOutlinedIcons = ({
  color, size="medium",
  onClick,
}: IconProps) => {
  return <NotificationsNoneOutlinedIcon  fontSize={size} color={color} onClick={onClick} />;
};
