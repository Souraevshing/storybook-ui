import Chip from "@mui/material/Chip";
import React from "react";
import "../../styles/components/chips.scss";

type ChipProps = {
  clickable: boolean;
  color:
    | "primary"
    | "success"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "warning"
    | "light";
  disabled: boolean;
  label: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled";
  icon?: any;
  avatar?: any;
  squarecorners?: boolean;
  onClick?: () => void;
};

/* Custom Chips Added */

export const Chips = ({
  color = "success",
  clickable,
  disabled,
  size,
  variant,
  label,
  squarecorners,
  icon,
  onClick,
  ...props
}: ChipProps) => {
  return (
    <div className="chips">
      <Chip
        clickable={clickable}
        disabled={disabled}
        label={label}
        size={size}
        variant={variant}
        icon={icon}
        {...props}
        className={`${squarecorners ? "chip-squared" : "chip"} chip-${color}`}
        onClick={onClick}
        sx={{
          "& .MuiChip-label": {
            fontSize: "10px",
            lineHeight: "18px",
          },
        }}
      />
    </div>
  );
};
