import React, { useEffect, useState } from "react";
// import "../../styles/components/searchableDropdown.scss";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SearchIcons } from "../Icons/SearchIcon";
import { InputLabel } from "@mui/material";
import { stringify } from "querystring";

export interface CustomDropdownProps {
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
  label: string;
  /**used for setting width `width={200}` */
  width?: number;
  defaultSelectedItems: number[];
  disabled?: boolean;
  allowMultipleSelection: boolean;
  placeholder: string;
}

export const CustomDropdown = ({
  options,
  onMenuSelect,
  placeholder,
  label,
  width = 200,
  allowMultipleSelection = false,
  disabled,
  defaultSelectedItems,
}: CustomDropdownProps) => {
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

  const customSingleDropdown = () => {
    return (
      <>
        <FormControl style={{ width }}>
          <InputLabel
            size="small"
            className="dropdown-input-label"
            id="custom-dropdown"
            shrink={false}
          >
            {formConfigs.selectedDropdown.length ? null : placeholder}
          </InputLabel>
          <Select
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
              console.log(`selectedId --- `, selectedId);
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
            onMouseEnter={() => {
              setFormConfigs({
                ...formConfigs,
                searchBarValue: "",
              });
            }}
          >
            <FormControl
              className="dropdown-padding-10"
              style={{ width }}
              variant="standard"
            >
              <InputLabel className="dropdown-padding-10">Search</InputLabel>
              <Input
                id="search-bar"
                type={"text"}
                // value={ }
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
            </FormControl>
            {options
              .filter((optionFilter) => {
                return (
                  optionFilter.name
                    .toLowerCase()
                    .includes(
                      formConfigs.searchBarValue.trim().toLocaleLowerCase()
                    ) || +optionFilter.id === +formConfigs.selectedDropdown[0]
                );
              })
              .map((option, index) => {
                return (
                  <MenuItem
                    className=""
                    key={`option-${index}`}
                    value={+option.id}
                  >
                    {option.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </>
    );
  };

  const customMultipleDropdown = () => {
    return (
      <>
        <FormControl style={{ width }}>
          <InputLabel shrink={false} size="small" id="custom-dropdown">
            {formConfigs.selectedDropdown.length ? null : placeholder}
          </InputLabel>
          <Select
            size="small"
            disabled={disabled}
            labelId="custom-dropdown"
            multiple
            className="custom-select"
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
            onMouseEnter={() => {
              setFormConfigs({
                ...formConfigs,
                searchBarValue: "",
              });
            }}
          >
            <FormControl
              className="dropdown-padding-10 dropdown-mb-5"
              style={{ width }}
              variant="standard"
            >
              <InputLabel className="dropdown-padding-10">Search</InputLabel>
              <Input
                id="search-bar"
                type={"text"}
                // value={ }
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
            </FormControl>
            {options
              .filter((optionFilter) => {
                return (
                  optionFilter.name
                    .toLowerCase()
                    .includes(
                      formConfigs.searchBarValue.trim().toLocaleLowerCase()
                    ) || formConfigs.selectedDropdown.includes(optionFilter.id)
                );
              })
              .map((option, index) => {
                return (
                  <MenuItem
                    className=""
                    key={`option-${index}`}
                    value={option.id}
                  >
                    {option.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </>
    );
  };

  return (
    <>
      {allowMultipleSelection
        ? customMultipleDropdown()
        : customSingleDropdown()}{" "}
    </>
  );
};
