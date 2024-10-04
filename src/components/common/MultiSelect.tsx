import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import Box from "@material-ui/core/Box/Box";

import { ArrowDownIcon } from "./Icons/ArrowDown";
import "../../styles/components/multiSelect.scss";
import IconButton from "@material-ui/core/IconButton/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox/Checkbox";

interface MultiSelectProps {
  options: object[];
  onChange: () => void;
  id: string;
  key: string;
  multiple?: boolean;
  freeSolo?: boolean;
  placeholder: string;
  labelStyles?: object;
  boxStyles?: object;
  variant: "filled" | "outlined" | "standard";
  TextfieldClasses?: object;
  defaultValue?: any;
  ChipProps?: object;
  disabled?: boolean;
  name?: string;
  size?: "medium" | "small";
  value?: any;
  LabelText?: string;
  LabelTextStyles?: object;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  onChange,
  options,
  key,
  labelStyles,
  LabelText,
  name,
  LabelTextStyles,
  id,
  boxStyles,
  freeSolo,
  disabled,
  size,
  TextfieldClasses,
  variant,
  defaultValue,
  ChipProps,
  multiple,
  value,
  placeholder,
  ...props
}: MultiSelectProps) => {
  return (
    <div className="component-main">
      <label style={LabelTextStyles}>{LabelText}</label>
      <Autocomplete
        multiple={multiple}
        key={key}
        freeSolo={freeSolo}
        onChange={onChange}
        id={id}
        ChipProps={ChipProps}
        options={options}
        autoHighlight
        getOptionLabel={(option: any) => option.label}
        renderOption={(props: any, option: any) => (
          <Box
            component="li"
            sx={{
              "& > img": {
                mr: 2,
                flexShrink: 0,
                fontSize: 12,
              },

              ...labelStyles,
            }}
            {...props}
          >
            {/* <Checkbox
              style={{
                color: "#1a577e",
                fontSize: 12,
              }}
              // sx={{ color: "#1a577e" }}
            /> */}
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            name={name}
            placeholder={placeholder}
            sx={boxStyles}
            classes={TextfieldClasses}
            defaultValue={defaultValue}
            value={value}
            variant={variant}
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "",
              style: {
                maxHeight: 34,
                boxSizing: "border-box",
                color: "#212224",
                borderRadius: 4,
              },
              endAdornment: (
                <InputAdornment variant="outlined" position="start">
                  <IconButton>
                    <ArrowDownIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default MultiSelect;
