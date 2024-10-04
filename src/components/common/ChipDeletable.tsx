import Chip from "@mui/material/Chip";
import React from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type ChipProps = {
  clickable: boolean;
  color:
    | "primary"
    | "success"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "warning";
  disabled: boolean;
  deleteIcon: any;
  label: string;
  onDelete: () => void;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  icon?: any;
  avatar?: any;
};

export const ChipsDeletable = ({
  color,
  clickable,
  disabled,
  deleteIcon = (
    <CloseOutlinedIcon
      style={{ color: "#000", fontSize: "8px", marginTop: 1 }}
    />
  ),
  size,
  variant,
  label,
  onDelete,
  icon,
  ...props
}: ChipProps) => {
  return (
    <Chip
      color={color}
      clickable={clickable}
      disabled={disabled}
      deleteIcon={deleteIcon}
      label={label}
      onDelete={onDelete}
      size={size}
      variant={variant}
      {...props}
      icon={icon}
      sx={{
        "& .MuiChip-label": {
          fontSize: "10px",
          lineHeight: "12px",
        },
      }}
    />
  );
};
