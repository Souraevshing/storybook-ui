import React from "react";
import "../../styles/components/textarea.scss";
import TextareaAutosize from '@mui/material/TextareaAutosize';

type Textarea = {
  disabled?: boolean;
  height?: string;
  maxLength?: number;
  minLength?: number;
  id: string;
  placeholder: string;
  onChange: (option : any) => void;
  required?: boolean;
  value?: string;
  width?: string;
  label?: string;
  maxRows?: number;
  minRows?: number;
  customclasses?: string
};

export const Textarea = ({
  id,
  maxLength,
  minLength,
  required,
  placeholder,
  disabled,
  label,
  onChange,
  width,
  height,
  value,
  maxRows,
  minRows,
  customclasses
}: Textarea) => {

  return (
    <div>
      {label && <p className="label">{label}</p>} 
      <TextareaAutosize
        disabled={disabled}
        id={id}
        className={`field ${customclasses} ${disabled ? "disabled" : ""}`}
        onChange={(e) => {
          onChange(e)
        }}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        style={{ width: `${width}`, height: `${height}`}}
        defaultValue={value}
        maxRows={maxRows}
        minRows={minRows}
      />
    </div>
  );
};
