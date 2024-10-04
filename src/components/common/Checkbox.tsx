// import React from "react";

// import Checkbox from "@mui/material/Checkbox";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";

// type CheckboxProps = {
//   color:
//     | "primary"
//     | "success"
//     | "secondary"
//     | "error"
//     | "info"
//     | "warning"
//     | "default";
//   checked: boolean;
//   disabled: boolean;
//   disableRipple: boolean;
//   defaultChecked: boolean;
//   id: string;
//   labelPlacement: string;
//   indeterminate: boolean;
//   inputProps: object;
//   onChange: () => void;
//   required: boolean;
//   size: "medium" | "small";
//   value: any;
// };

// export const CheckBoxes = ({
//   color,
//   checked,
//   defaultChecked,
//   disabled,
//   disableRipple,
//   labelPlacement,
//   id,
//   indeterminate,
//   inputProps,
//   onChange,
//   required,
//   size,
//   value,
// }: CheckboxProps) => {
//   return (
//     <FormGroup>
//       <FormControlLabel
//         control={
//           <Checkbox
//             defaultChecked={defaultChecked}
//             checked={checked}
//             color={color}
//             disabled={disabled}
//             disableRipple={disableRipple}
//             id={id}
//             indeterminate={indeterminate}
//             inputProps={inputProps}
//             onChange={onChange}
//             required={required}
//             size={size}
//             value={value}
//           />
//         }
//         label={labelPlacement}
//       />
//     </FormGroup>
//   );
// };

import React from "react";
import "../../styles/components/checkbox.scss";

type CheckboxProps = {
  labelText: string;
  id: string;
  color: string;
  name: string;
  action: string;
  value: string;
  onChange: () => void;
};

function Checkbox({
  labelText,
  id,
  name,
  action,
  color,
  value,
  onChange,
}: CheckboxProps) {
  return (
    <div className="checkbox-home">
      <form action={action} className="checkbox-form">
        <input
          style={{ accentColor: color }}
          className="checkbox-input"
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <label className="checkbox-label" htmlFor={id}>
          {labelText}
        </label>
      </form>
    </div>
  );
}

export default Checkbox;
