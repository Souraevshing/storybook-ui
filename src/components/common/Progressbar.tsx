import React from "react";
import "../../styles/components/progressbar.scss";

type ProgressbarProps = {
  id?: string;
  value: number;
  max: number;
  label: string;
};

function Progressbar({
  id = "progressId",
  value,
  max,
  label,
}: ProgressbarProps) {
  return (
    <div className="w-[1092px] h-[35px] bg-[#2D3047] rounded-[4px] flex">
      <span className="text-xs leading-[18px] font-bold text-[#FFFFFF] mt-[9px] ml-2 mr-[9px]">
        {label}
      </span>
      <div className="text-xs leading-[18px] font-bold w-[35px] h-[25px] bg-[#FFFFFF] border border-[#212224] border-solid rounded-[4px] mt-[5px] mr-6 grid content-center">
        <div className="text-center">{((value / max) * 100).toFixed(0)}%</div>
      </div>
      <div className="progressbar-parent mt-[2px]">
        <progress
          className="progressbar"
          id={id}
          value={value}
          max={max}
        ></progress>
      </div>
    </div>
  );
}

export default Progressbar;
