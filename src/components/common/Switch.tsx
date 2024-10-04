import React from "react";
import Switch from "@mui/material/Switch";

type SwitchProps = {
  checked: boolean;
  color:
    | "primary"
    | "success"
    | "default"
    | "secondary"
    | "error"
    | "info"
    | "warning";
  defaultChecked: true | false;
  disabled: boolean;
  disableRipple: boolean;
  edge: "end" | "start" | false;
  id: string;
  inputProps: object;
  onChange: () => void;
  required: boolean;
  size: "medium" | "small";
  value: any;
};

export const Switches = ({
  checked,
  color,
  defaultChecked,
  disabled,
  edge,
  id,
  inputProps,
  onChange,
  size,
  value,
}: SwitchProps) => {
  return (
    <Switch
      checked={checked}
      color={color}
      defaultChecked={defaultChecked}
      disabled={disabled}
      edge={edge}
      id={id}
      inputProps={inputProps}
      onChange={onChange}
      size={size}
      value={value}
    />
  );
};

// import React from "react";
// import "../../styles/components/switch.scss";

// type SwitchProps = {
//   onChange: () => void;
// };

// function Switch({ onChange }: SwitchProps) {
//   return (
//     <div>
//       <label className="switch">
//         <input type="checkbox" onChange={onChange} />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// }

// export default Switch;
