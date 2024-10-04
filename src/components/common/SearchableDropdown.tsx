import React, { useEffect, useRef, useState } from "react";
import "../../styles/components/searchableDropdown.scss";
import { ArrowDownIcon } from "./Icons/ArrowDown";
import SvgIcon from '@mui/material/SvgIcon';

export interface SearchableDropdownProps {
  /**options prop used for providing options */
  options: any[];
  /**you can use placeholder for overiding default select */
  placeholder?: string;
  /**onChange method provides selected value */
  onChange: (option: any) => void;
  /**label used for naming options.if array of an object contains country_name and you want to show it as a label you have to pass `label="country_name"`*/
  label: string;
  /**used for setting width `width={200}` */
  width?: number;
  labeltext?: string;
  disabled?: boolean;
  icon: string,
  customclass: string
}

export const SearchableDropdown = ({
  options,
  placeholder = "select",
  onChange,
  label,
  width = 200,
  labeltext,
  disabled,
  icon = "searchicon",
  customclass
}: SearchableDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(null);
  const [query, setQuery] = useState<string>("");
  const ref = useRef(null);

  const displayValue = () => {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  };

  const filter = (options: any[]) => {
    return options.filter(
      (option) => {
        if (option[label].toLowerCase().indexOf(query.toLowerCase()) > -1) {
          return option
        }
      }

    );
  };

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  });

  const close = (e: any) => {
    setOpen(e && e.target === ref.current);
  };

  return (
    <>
      {labeltext && <p className="label">{labeltext}</p>}

      <div className="dropdown" style={{ width }}>
        <div className="control" onClick={() => setOpen((prev) => !prev)}>
          <div className="selected-value">
            <input
              type={"text"}
              ref={ref}
              placeholder={value ? value[label] : placeholder}
              value={displayValue()}
              onChange={(e) => {
                setQuery(e.target.value);
                setValue(null);
                onChange(e)
              }}
              disabled={disabled}
              className={customclass}
            />
          </div>
          <div className="arrow">
            {icon === "arrow" ? <ArrowDownIcon /> : icon === "searchicon" ? <SvgIcon sx={{ margin: 0, padding: 0, position: "absolute" , top: '-5px', right: '-5px' }}><path d="M13.4742 12.5266L11.0009 10.0733C11.961 8.87621 12.4259 7.3568 12.3001 5.82747C12.1743 4.29814 11.4674 2.87512 10.3246 1.85103C9.18182 0.82694 7.69012 0.27961 6.15619 0.321583C4.62227 0.363557 3.16273 0.991644 2.07767 2.0767C0.992621 3.16175 0.364533 4.62129 0.32256 6.15522C0.280586 7.68914 0.827917 9.18085 1.85201 10.3236C2.8761 11.4664 4.29911 12.1733 5.82845 12.2991C7.35778 12.4249 8.87719 11.96 10.0742 10.9999L12.5276 13.4533C12.5896 13.5158 12.6633 13.5654 12.7445 13.5992C12.8258 13.633 12.9129 13.6505 13.0009 13.6505C13.0889 13.6505 13.1761 13.633 13.2573 13.5992C13.3385 13.5654 13.4123 13.5158 13.4742 13.4533C13.5944 13.329 13.6616 13.1628 13.6616 12.9899C13.6616 12.817 13.5944 12.6509 13.4742 12.5266ZM6.33425 10.9999C5.41127 10.9999 4.50901 10.7262 3.74158 10.2135C2.97416 9.70068 2.37602 8.97185 2.02281 8.11913C1.6696 7.2664 1.57718 6.32809 1.75725 5.42285C1.93731 4.5176 2.38177 3.68608 3.03441 3.03344C3.68706 2.38079 4.51858 1.93634 5.42382 1.75627C6.32907 1.57621 7.26738 1.66862 8.1201 2.02183C8.97282 2.37504 9.70166 2.97318 10.2144 3.74061C10.7272 4.50804 11.0009 5.41029 11.0009 6.33327C11.0009 7.57095 10.5092 8.75793 9.63408 9.6331C8.75891 10.5083 7.57192 10.9999 6.33425 10.9999Z" fill="#434343" />
            </SvgIcon> : <ArrowDownIcon />}
          </div>
        </div>
        <div className={`options ${open ? "open" : null}`}>
          {/* This query is custom add label button */}
          {query ?
            <div className={`option ${value === query ? "selected" : null}`} onClick={() => {
              setQuery(query);
              onChange(query);
              setValue(query);
              setOpen(false);
            }}>{query} (New label)
            </div> : null}
          {filter(options).map((option, ind) => (
            <div
              className={`option ${value === option ? "selected" : null} ${disabled ? "option_disabled" : ""}`}
              onClick={() => {

                if (disabled) {
                  return null
                } else {
                  setQuery("");
                  onChange(option);
                  setValue(option);
                  setOpen(false);
                }

              }}
              key={ind}
            >
              {option[label]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};