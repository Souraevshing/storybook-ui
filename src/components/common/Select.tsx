import React from "react";
import "../../styles/components/select.scss";

type SelectProps = {
  autoFocus: boolean;
  disabled: boolean;
  multiple: boolean;
  id: string;
  placeholder: string;
  name: string;
  onChange: () => void;
  onSelect: () => void;
  required: boolean;
  size: number;
  value: string;
};

const optionsData = [
  { value: "option1", text: "option 1" },
  { value: "option2", text: "option 2" },
  { value: "option3", text: "option 3" },
  { value: "option4", text: "option 4" },
];

export const SelectField = ({
  autoFocus,
  disabled,
  id,
  multiple,
  name,
  placeholder,
  onSelect,
  onChange,
  required,
  size,
  value,
  ...props
}: SelectProps) => {
  return (
    <form className="select-form" action="/action_page.php">
      <select
        className="select"
        id={id}
        autoFocus={autoFocus}
        disabled={disabled}
        multiple={multiple}
        placeholder={placeholder}
        onChange={onChange}
        onSelect={onSelect}
        required={required}
        name={name}
        size={size}
        value={value}
        {...props}
      >
        <option className="select-option-placeholder" disabled selected>
          {placeholder}
        </option>
        {optionsData.map((item) => (
          <option className="select-option" value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </form>
  );
};
