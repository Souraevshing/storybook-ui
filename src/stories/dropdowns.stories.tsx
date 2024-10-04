import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  CustomDropdown,
  CustomDropdownProps,
} from "../components/common/dropdown/custom";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/dropdown",
  component: CustomDropdown,
  argTypes: {
    options: {
      description: "dropdown options to list",
    },
    onMenuSelect: {
      description: "callback event on clicking/selecting any menu item",
    },
    label: {
      description: "label name",
    },
    width: {
      description: "set width of current dropdown menu",
    },
    disabled: {
      description: "make field disabled",
    },
    allowMultipleSelection: {
      description: "allowing multiple selection",
    },
    defaultSelectedItems: {
      description: "pass array of strings (ids) to make field selected",
    },
  },
};

export default meta;

const Template: Story<CustomDropdownProps> = (args) => (
  <CustomDropdown
    {...args}
    onMenuSelect={(option) => {
      action("selected menu ---> ")(option);
    }}
  />
);

export const custom = Template.bind({});
custom.args = {
  options: [
    { id: 1, name: "Morocco" },
    { id: 2, name: "Denmark" },
    { id: 3, name: "England" },
    { id: 4, name: "Australia" },
    { id: 5, name: "Peru" },
    { id: 6, name: "Chili" },
    { id: 7, name: "Canada" },
    { id: 8, name: "Finland" },
    { id: 9, name: "France" },
  ],
  // onMenuSelect: (val) => console.log(val),
  label: "Label",
  width: 300,
  disabled: false,
  allowMultipleSelection: false,
  defaultSelectedItems: [],
  placeholder: "placeholder",
};
