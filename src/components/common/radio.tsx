import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import { styled, SxProps, Theme } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import "../../styles/components/radio.scss";

export interface ICommonRadioField {
  size: "small" | "medium" | undefined;
  alignment: "vertical" | "horizontal";
  label: string;
  isDisabled: boolean;
  extraClasses: {
    primaryLabel: SxProps<Theme> | undefined;
    radio: {
      labelText: object;
      borderColor: string;
      bgColor: string;
    };
  };
  onValueChange(event: React.ChangeEvent<HTMLInputElement>): void;
  options: {
    id: number;
    name: string;
  }[];
  defaultSelectedId: number | string;
}

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

export const RadioField = ({
  size = "small",
  alignment = "vertical",
  isDisabled = false,
  options = [],
  label = "",
  extraClasses,
  defaultSelectedId = "",
  onValueChange,
}: ICommonRadioField) => {
  const [selectedId, setSelectedId] = useState(defaultSelectedId);

  useEffect(() => {
    setSelectedId(defaultSelectedId);
  }, [defaultSelectedId]);

  const StyledFormControlLabel = styled(
    (props: StyledFormControlLabelProps) => <FormControlLabel {...props} />
  )(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      textAlign: "left",
      ...extraClasses.radio.labelText,
    },
  }));

  const MyFormControlLabel = (props: FormControlLabelProps) => {
    const { value } = props;
    return (
      <StyledFormControlLabel
        checked={value ? value === +selectedId : false}
        {...props}
      />
    );
  };

  return (
    <>
      <FormControl>
        <FormLabel
          sx={{
            fontFamily: "Sofia pro",
            fontSize: "12px",
            fontWeight: 800,
            ...extraClasses.primaryLabel,
            "&.Mui-focused": {
              color: "black",
            },
          }}
          id="radio-field-label"
          className={`radio-field-label ${extraClasses.primaryLabel}`}
        >
          {label}
        </FormLabel>
        <RadioGroup
          row={alignment === "horizontal" ? true : false}
          aria-labelledby="radio-field-label"
          className="flex bg-red"
          defaultValue={selectedId}
          name="radio-buttons-group"
          onChange={(value) => {
            onValueChange(value);
            setSelectedId(value.target.value);
          }}
        >
          {options.map((option, index) => (
            <MyFormControlLabel
              disabled={isDisabled}
              key={`option-key-${index}`}
              value={option.id}
              label={option.name}
              control={
                <Radio
                  sx={{
                    color: !isDisabled ? extraClasses.radio.borderColor : "",
                    "&.Mui-checked": {
                      color: !isDisabled ? extraClasses.radio.bgColor : "",
                    },
                  }}
                  size={size}
                />
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
