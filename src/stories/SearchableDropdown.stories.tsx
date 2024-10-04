import React from "react";
import {
  SearchableDropdown,
  SearchableDropdownProps,
} from "../components/common/SearchableDropdown";
import { Meta, Story } from "@storybook/react";
import country from "../utils/country.json";

const meta: Meta = {
  title: "Components/SearchableDropdown",
  component: SearchableDropdown,
};

export default meta;

const Template: Story<SearchableDropdownProps> = (args) => (
  <SearchableDropdown {...args} />
);

export const arrowicon = Template.bind({});
arrowicon.args = {
  options: [...country],
  onChange: (val) => console.log(val),
  label: "country_name",
  labeltext: "Labeltext",
  disabled: false,
  icon: "arrow"
};

export const searchicon = Template.bind({});
searchicon.args = {
  options: [...country],
  label: "country_name",
  labeltext: "Labeltext",
  disabled: false,
  icon: "searchicon"
};

export const customWidth = Template.bind({});
customWidth.args = {
  options: [...country],
  onChange: (val) => console.log(val),
  label: "country_name",
  width: 500,
  labeltext: "Labeltext",
  disabled: false
};
