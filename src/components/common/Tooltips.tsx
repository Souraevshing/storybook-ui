import React from "react";
import { styled, Theme } from "@mui/material/styles";
import Tooltip, {
  TooltipProps as Iprops,
  tooltipClasses,
} from "@mui/material/Tooltip";

type TooltipProps = {
  basicText: string;
  tooltipText: string;
  position: "top" | "right" | "bottom" | "left";
  customClasses: {
    label: string;
    tooltip: Theme;
  };
  extraIcon: JSX.Element;
  showToolTipOnIcon: boolean;
};


export const Tooltips = ({
  basicText,
  tooltipText,
  position,
  customClasses,
  extraIcon = <></>,
  showToolTipOnIcon = false,
}: TooltipProps) => {
  const CustomToolTip = styled(({ className, ...props }: Iprops) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
      // title={<span className="custom-tooltip-label"> {tooltipText}</span>}
      arrow
      className={` ${customClasses.tooltip}`}
      placement={position}
    >
      {props.children}
    </Tooltip>
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      boxShadow: theme.shadows[1],
      ...customClasses.tooltip,
    },
  }));

  return showToolTipOnIcon ? (
    <>
      <span className={`custom-tooltip ${customClasses.label}`}>
        {basicText}
        <CustomToolTip
          className="custom-tooltip-label"
          title={<span className="custom-tooltip-label"> {tooltipText}</span>}
        >
          <span className="pointer tooltip-icon">{extraIcon}</span>
        </CustomToolTip>
      </span>
    </>
  ) : (
    <>
        <CustomToolTip
          className="custom-tooltip-label"
          title={<span className="custom-tooltip-label"> {tooltipText}</span>}
      >
          <span className={`custom-tooltip pointer ${customClasses.label}`}>
          {basicText} {extraIcon}
        </span>
        </CustomToolTip>
    </>
  );
};
