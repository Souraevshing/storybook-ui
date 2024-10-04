import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import { useEffect, useState } from "react";
// import "../../styles/components/searchableDropdown.scss";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { SearchIcons } from "./Icons/SearchIcon";
import { InputLabel } from "@mui/material";
import { ArrowDownIcon } from "./Icons/ArrowDown";
import { height } from "@mui/system";

export interface SelectorProps {
  /**options prop used for providing options */
  options: {
    id: number;
    name: string;
  }[];
  /**onChange method provides selected value */
  onMenuSelect: (
    option: { id: number; name: string } | { id: number; name: string }[]
  ) => void;
  /**label used for naming options.if array of an object contains country_name and you want to show it as a label you have to pass `label="country_name"`*/
  placeholder: string;
  /**used for setting width `width={200}` */
  width?: number;
  defaultSelectedItems: number[];
  disabled?: boolean;
  allowMultipleSelection: boolean;
  LabelText: string;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  onMenuSelect,
  placeholder,
  LabelText,
  width = 256,
  allowMultipleSelection = false,
  disabled,
  defaultSelectedItems,
}: SelectorProps) => {
  const [formConfigs, setFormConfigs] = useState<{
    searchBarValue: string;
    selectedDropdown: number[];
  }>({
    searchBarValue: "",
    selectedDropdown: [],
  });

  useEffect(() => {
    setFormConfigs({ searchBarValue: "", selectedDropdown: [] });
  }, [allowMultipleSelection]);

  useEffect(() => {
    setFormConfigs({ ...formConfigs, selectedDropdown: defaultSelectedItems });
  }, [defaultSelectedItems]);

  const selectedOptions = options.filter(
    (option: any) =>
      formConfigs &&
      formConfigs.selectedDropdown &&
      formConfigs.selectedDropdown.includes(option.id)
  );

  const sortedValues = [
    ...selectedOptions,
    ...options.filter(
      (option: any) => !formConfigs.selectedDropdown.includes(option.id)
    ),
  ];

  const customSingleDropdown = () => {
    return (
      <>
        <FormControl
          style={{
            width,
            fontSize: "12px",
            fontFamily: "Sofia Pro",
          }}
        >
          <InputLabel
            sx={{
              fontSize: "12px",
              fontFamily: "Sofia Pro",
              lineHeight: "18px",
              "&.Mui-focused": {
                color: "black",
              },
            }}
            shrink={false}
            size="small"
            className="selector-input-label"
            id="selector-dropdown"
          >
            {formConfigs.selectedDropdown.length ? null : placeholder}
          </InputLabel>
          <Select
            renderValue={() => {
              return (
                options &&
                options.find((option: { id: number; name: string }) => {
                  return option.id === formConfigs.selectedDropdown[0];
                }) &&
                options.find((option: { id: number; name: string }) => {
                  return option.id === formConfigs.selectedDropdown[0];
                })?.name
              );
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <ArrowDownIcon />
                </IconButton>
              </InputAdornment>
            }
            IconComponent={() => null}
            sx={{
              fontSize: "12px",
              fontFamily: "Sofia Pro",
              lineHeight: "18px",
              backgroundColor: "white",
              width: width,
              height: "34px",
              color: "#212224",
              borderRadius: "8px",
              boxSizing: "border-box",
              marginBottom: 5,
            }}
            size="small"
            disabled={disabled}
            labelId="custom-dropdown"
            id="custom-select"
            className="custom-select"
            value={
              formConfigs.selectedDropdown &&
              formConfigs.selectedDropdown.length
                ? formConfigs.selectedDropdown[0]
                : ""
            }
            onChange={(event) => {
              const selectedId = event.target.value;
              if (selectedId) {
                const selectedMenu = options.find(
                  (option) => option.id === +selectedId
                );
                if (selectedMenu && selectedMenu.id) onMenuSelect(selectedMenu);
                setFormConfigs({
                  searchBarValue: "",
                  selectedDropdown: [+selectedId],
                });
              }
            }}
          >
            <FormControl
              className="dropdown-padding-10"
              style={{
                width: "auto",
                maxHeight: "129px",
                borderRadius: "8px",
              }}
              variant="standard"
            >
              <Input
                placeholder="Search"
                sx={{
                  fontFamily: "Sofia Pro",
                  fontSize: "12px",
                  lineHeight: "18px",
                  borderRadius: "8px",
                  paddingLeft: "15px",
                }}
                key={`search-bar`}
                id="search-bar"
                type={"text"}
                value={formConfigs.searchBarValue}
                onChange={(event) => {
                  setFormConfigs({
                    ...formConfigs,
                    searchBarValue: event.target.value,
                  });
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchIcons />
                    </IconButton>
                  </InputAdornment>
                }
              />

              {options
                .filter((optionFilter) => {
                  return (
                    (optionFilter &&
                      optionFilter.name
                        .toLowerCase()
                        .includes(
                          formConfigs.searchBarValue.trim().toLocaleLowerCase()
                        )) ||
                    +optionFilter.id === +formConfigs.selectedDropdown[0]
                  );
                })
                .map((option, index) => {
                  return (
                    <MenuItem
                      onClick={(e: any) => {
                        formConfigs.selectedDropdown = [];
                        setFormConfigs({
                          ...formConfigs,
                          selectedDropdown: [
                            ...formConfigs.selectedDropdown,
                            e.target.value,
                          ],
                        });
                      }}
                      style={{
                        height: "34px !important",
                      }}
                      sx={{
                        width: width,
                        lineHeight: "18px",
                        height: "34px !important",
                        fontSize: "12px",
                        fontFamily: "Sofia Pro",
                      }}
                      className=""
                      key={`option-${index}`}
                      value={+option.id}
                    >
                      {option.name}
                    </MenuItem>
                  );
                })}
            </FormControl>
          </Select>
        </FormControl>
      </>
    );
  };

  const customMultipleDropdown = () => {
    return (
      <>
        <FormControl
          style={{
            width,
            borderRadius: "8px",
          }}
        >
          <InputLabel
            sx={{
              fontFamily: "Sofia Pro",
              fontSize: "12px",
              lineHeight: "18px",
              "&.Mui-focused": {
                color: "black",
                borderColor: "black",
              },
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
            shrink={false}
            size="small"
            className="selector-input-label"
            id="selector-dropdown"
          >
            {formConfigs.selectedDropdown.length ? null : placeholder}
          </InputLabel>
          <Select
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility">
                  <ArrowDownIcon />
                </IconButton>
              </InputAdornment>
            }
            IconComponent={() => null}
            renderValue={() => {
              return selectedOptions.map((item: any) => item.name).join(", ");
            }}
            sx={{
              backgroundColor: "white",
              width: width,
              height: "34px",
              color: "#212224",
              borderRadius: "8px",
              fontSize: "12px",
              boxSizing: "border-box",
              fontFamily: "Sofia Pro",
              marginBottom: 5,
            }}
            size="small"
            disabled={disabled}
            labelId="custom-dropdown"
            multiple
            id="custom-select"
            value={
              formConfigs.selectedDropdown.length
                ? formConfigs.selectedDropdown
                : []
            }
            onChange={(event: any) => {
              const selectedId = event.target.value;

              const selectedMenu = options.filter((option) =>
                selectedId.includes(option.id)
              );
              if (selectedMenu && selectedMenu.length)
                onMenuSelect(selectedMenu);
              if (
                formConfigs &&
                formConfigs.selectedDropdown &&
                formConfigs.selectedDropdown.includes(selectedId.toString())
              ) {
                formConfigs.selectedDropdown =
                  formConfigs.selectedDropdown.filter(
                    (value) => value !== selectedId
                  );
              } else {
                formConfigs.selectedDropdown = selectedId;
              }
              setFormConfigs({
                searchBarValue: "",
                selectedDropdown: formConfigs.selectedDropdown,
              });
            }}
          >
            <FormControl
              sx={{
                width: "auto",
                marginRight: "15px",
                maxHeight: "129px",
                borderRadius: "8px",
              }}
              variant="standard"
            >
              <Input
                placeholder="Search"
                sx={{
                  height: "34px",
                  fontFamily: "Sofia Pro",
                  fontSize: "12px",
                  lineHeight: "18px",
                  paddingLeft: "15px",
                }}
                id="selector-search-bar"
                type="text"
                value={formConfigs.searchBarValue}
                onChange={(event) => {
                  setFormConfigs({
                    ...formConfigs,
                    searchBarValue: event.target.value,
                  });
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility">
                      <SearchIcons />
                    </IconButton>
                  </InputAdornment>
                }
              />

              {sortedValues
                .filter((option: any) => {
                  return [...selectedOptions, option];
                })
                .filter((optionFilter) => {
                  return (
                    (optionFilter &&
                      optionFilter.name
                        .toLowerCase()
                        .includes(
                          formConfigs.searchBarValue.trim().toLocaleLowerCase()
                        )) ||
                    (formConfigs &&
                      formConfigs.selectedDropdown &&
                      formConfigs.selectedDropdown.includes(optionFilter.id))
                  );
                })
                .map((option, index) => {
                  return (
                    <MenuItem
                      onClick={(e: any) => {
                        const selectedValue = Number(e.target.value);
                        formConfigs.selectedDropdown.includes(+selectedValue)
                          ? setFormConfigs({
                              ...formConfigs,
                              selectedDropdown:
                                formConfigs.selectedDropdown.filter(
                                  (item: any) => item !== +selectedValue
                                ),
                            })
                          : setFormConfigs({
                              ...formConfigs,
                              selectedDropdown: [
                                ...formConfigs.selectedDropdown,
                                +selectedValue,
                              ],
                            });
                      }}
                      sx={{
                        height: "34px",
                        fontSize: "12px",
                        fontFamily: "Sofia Pro",
                        lineHeight: "18px",
                        color: "#000000",
                      }}
                      className=""
                      key={`option-${index}`}
                      value={option.id}
                    >
                      <Checkbox
                        value={option.id}
                        style={{
                          color: "#1a577e",
                          fontSize: "12px",
                        }}
                        checked={
                          formConfigs &&
                          formConfigs.selectedDropdown &&
                          formConfigs.selectedDropdown.includes(option.id)
                        }
                      />
                      {option.name}
                    </MenuItem>
                  );
                })}
            </FormControl>
          </Select>
        </FormControl>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
      }}
    >
      <label
        style={{
          fontSize: "12px",
          color: "#212224",
          marginBottom: "4px",
        }}
      >
        {LabelText}
      </label>
      {allowMultipleSelection
        ? customMultipleDropdown()
        : customSingleDropdown()}{" "}
    </div>
  );
};
