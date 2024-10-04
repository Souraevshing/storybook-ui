import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MultiSelect from "../components/common/MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
  argTypes: {
    onChange: { description: "on change function" },
    options: {
      description:
        "the drop down list option, label is the key to show the list",
    },
    key: { description: "key of the component" },
    labelStyles: { description: "the styles given as object to label" },
    name: { description: "name of the component" },
    id: { description: "id of the component" },
    boxStyles: { description: "the styles given as object to box" },
    freeSolo: {
      control: "boolean",
      description: "true or false to become freesolo",
    },
    disabled: {
      control: "boolean",
      description: " true or false to become active or inactive",
    },
    size: { control: "radio", description: "select the size of the component" },
    TextfieldClasses: { description: "className given to the Text field" },
    variant: {
      control: "radio",
      description: "choose the variant from given options",
    },
    defaultValue: { description: "default value given to the element" },
    ChipProps: { description: "object given to control the ui design of chip" },
    multiple: {
      control: "boolean",
      description: "choose whether comoponent should accept multiple inputs",
    },
    value: { description: "value of the component" },
    placeholder: { description: "placeholder of the component" },
  },
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (args) => (
  <MultiSelect {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
  size: "small",
  labelStyles: { fontSize: 12, boxSizing: "border-box", maxHeight: 34 },
  variant: "outlined",
  boxStyles: {
    width: 226,
    height: 34,
    input: {
      "&::placeholder": {
        opacity: 1,
      },
    },
  },

  placeholder: "Select here",
  options: [
    { id: 1, label: "India" },
    { id: 2, label: "England" },
    { id: 3, label: "Sri Lanka" },
    { id: 4, label: "Australia" },
    { id: 5, label: "Peru" },
    { id: 6, label: "Denmark" },
  ],
  id: "1",
  key: "key-1",
  multiple: true,
  onChange: (e: any) => {
    console.log(e);
  },

  LabelTextStyles: {
    fontFamily: "Sofia Pro",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 12,
    marginBottom: 4,
    color: "#212224",
  },
  LabelText: "Hello world",
  ChipProps: { size: "small" },
};
