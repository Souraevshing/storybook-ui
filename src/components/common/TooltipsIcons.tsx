import "../../styles/components/tooltipicon.scss";
import React from "react";

type TooltipProps = {
  icon: any;
  tooltipText: any;
  toolposition: "top" | "right" | "bottom" | "left"
};

export const TooltipsIcons = ({ icon, tooltipText, toolposition }: TooltipProps) => {


  return (
    <div className="tooltips">
      <div className="tooltip-basic-text">{icon}</div>
      <span className={`tooltiptext-${toolposition}`}>{tooltipText}</span>
    </div>

  ); 
};
