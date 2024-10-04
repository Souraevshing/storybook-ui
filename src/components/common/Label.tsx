import React from "react";
import "../../styles/components/label.scss";
import ClearIcon from '@mui/icons-material/Clear';

type Labelprops = {
  textcolor: string;
  backgroundColor : string;
  label: string;
  size?: "small" | "medium";
  icon?: any,
  deletable? : boolean,
  onDelete? : ()=> void,
  required? : boolean
};

/* Custom Chips Added */

export const Label = ({
  textcolor,
  backgroundColor,
  size = "small",
  label,
  icon,
  deletable,
  onDelete,
  required,
  ...props
}: Labelprops) => {
  return (
    <div className={`label-wrapper`} style={{color : `${textcolor}`, backgroundColor: `${backgroundColor}`}}>
        <div className="label-text">{icon} {label} {required ? <span style={{color : "red", fontSize : "15px"}}>*</span> : ""}</div>
        {deletable ? <ClearIcon sx={{ cursor: "pointer", fontSize: 20, verticalAlign: 'middle' }} onClick={onDelete} /> : ""}
    </div>

  );
};
