import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChipsDeletable } from "../components/common/ChipDeletable";
import FaceIcon from '@mui/icons-material/Face';

export default {
  title: "Components/ChipsDeletable",
  component: ChipsDeletable,
  argTypes: {
    color: {
      control: "radio",
      description:
        "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
    },
    clickable: {
      control: "boolean",
      description:
        "If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined. If false, the chip will not appear clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable. Note: this controls the UI and does not affect the onClick event.",
    },
    disabled: {
      control: "boolean",
      description: "	If true, the component is disabled.",
    },

    deletable: {
      control: "boolean",
      description:
        "Add onDelete property as an attribute to enable delete icon inside chip",
    },

    deleteIcon: {
      control: "object",
      description:
        "Override the default delete icon element. Shown only if onDelete is set.",
    },

    size: { control: "radio", description: "The size of the component." },

    variant: { control: "radio", description: "The variant to use." },

    label: { control: "text", description: "The content of the component" },

    icon: { control: "object", description: "Add icon to the chip(optional)"}
  },
} as ComponentMeta<typeof ChipsDeletable>;

const Template: ComponentStory<typeof ChipsDeletable> = (args) => (
  <ChipsDeletable {...args} />
);

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined Small",
  size: "small",
  variant: "outlined",
  clickable: false,
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled Chip",
  size: "small",
  variant: "filled",
  clickable: false
};

export const Icons = Template.bind({});
Icons.args = {
  label: "With Icon",
  size: "small",
  variant: "filled",
  clickable: false,
  icon : <FaceIcon />
};
