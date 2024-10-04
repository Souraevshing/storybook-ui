import { useEffect, useState } from "react";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../styles/components/textfield.scss";

interface ICommonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>,
  labelText: string,
  inputGroupIcon?: JSX.Element,
  isDisabled?: boolean,
  showIcon: boolean,
  isInvalid: boolean,
  onIconClick(searchedInput: string | number | readonly string[] | undefined): void,
  placeholder?: string;
  extraClassName: {
    label: '',
    inputField: '',
    iconField: '',
    width: '',
  }
}


export const TextFields = ({
  labelProps,
  labelText,
  isInvalid = false,
  id,
  inputGroupIcon = <SearchIcon />,
  showIcon = false,
  onIconClick,
  placeholder = '',
  isDisabled = false,
  extraClassName,
  ...props
}: ICommonInputProps) => {

  return (
    <div className={`flex flex-col ${extraClassName.width}`}>
      <label
        className={`text-xs font-normal text-grey-700 ${extraClassName.label}`}
        htmlFor={id}
        {...labelProps}
      >
        {labelText}
      </label>

      <div
        className={`mt-2 flex flex-wrap items-stretch relative `}
      >
        <input
          disabled={isDisabled}
          id={id}
          placeholder={placeholder}
          autoFocus={props.autoFocus}
          value={props.value}
          className={
            `flex-shrink flex-grow leading-normal flex-1 h-10 border-grey-light  rounded-r-none relative  rounded border border-light-silver py-2 px-3 text-sm ${extraClassName.width || 'w-50'}
            ${(showIcon && !isDisabled) ? 'input-border-r-0' : 'border'} ${isDisabled ? "cursor-not-allowed input-field-disabled" : "bg-white"}
            ${extraClassName.inputField}
            
            ${isInvalid ? 'border-red-500' : ''}`
          }
          {...props}
        />
        {(showIcon && !isDisabled) ? (
          <div className="flex -mr-px ">
            <span className={`flex items-center leading-normal  pointer rounded rounded-l-none border input-border-l-0  px-3 whitespace-no-wrap text-grey-dark text-sm ${isDisabled ? "cursor-not-allowed bg-crayola" : "bg-white"}
            ${extraClassName.iconField}
            ${isInvalid ? 'border-red-500' : ''}`
            }
              onClick={() => {
                if (!isDisabled) {
                  onIconClick(props.value);
                }
              }}>
              {inputGroupIcon}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
