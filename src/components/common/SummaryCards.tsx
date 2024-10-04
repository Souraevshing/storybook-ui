import React from "react";
import "../../styles/components/summarycard.scss";
import { RightRoundedArrow } from "./Icons/RightRoundedArrow";

type SummaryCardsProps = {
  title?: string,
  value?: string,
  currency?: string,
  link?: string,
  icon?: string,
  onClick?: () => void,
};

export const SummaryCards = ({
  title,
  value,
  currency,
  link,
  icon,
  onClick,
}: SummaryCardsProps) => {
  return (
    <div className="flex">
      <div className="summaryCard">
      {title && <p className="titleText">{title}</p>}
        <p className="valueText">
        {currency && <span>{currency}</span> }
          {value}
        </p>
        <div onClick={onClick} className="flex items-center">
        {link && <p className="linkText">{link}</p>}
          {icon && <div className="cursor-pointer"><RightRoundedArrow /></div>}
        </div>
      </div>
    </div>
  );
};
