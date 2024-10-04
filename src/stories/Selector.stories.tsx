import React from "react";
import { Meta, Story } from "@storybook/react";
import { Selector, SelectorProps } from "../components/common/Selector";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/Selector",
  component: Selector,
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

const Template: Story<SelectorProps> = (args) => (
  <Selector
    {...args}
    onMenuSelect={(option) => {
      action("selected menu ---> ")(option);
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {
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

  placeholder: "select here",
  width: 200,
  disabled: false,
  allowMultipleSelection: false,
  defaultSelectedItems: [],
  LabelText: "hello world",
};
