import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Chips } from "../components/common/Chip";
import FaceIcon from '@mui/icons-material/Face';

export default {
  title: "Components/Chips",
  component: Chips,
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

    squarecorners: { control: "boolean", description: "Set to true if you want chip with squared corners"},

    icon: { control: "object", description: "Add icon to the chip(optional)"},

    onClick: { action: 'clicked',description: "Pass any click event to this function" }
  },
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />;

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined Small",
  size: "small",
  variant: "outlined",
  clickable: false,
  squarecorners : false,
  color: "primary"
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled Chip",
  size: "small",
  variant: "filled",
  clickable: false,
  squarecorners : false
};

export const SquaredCorners = Template.bind({});
SquaredCorners.args = {
  label: "Squared Chip",
  size: "small",
  variant: "outlined",
  clickable: false,
  squarecorners: true,
  color: "light"
};

export const Chip_Icon = Template.bind({});
Chip_Icon.args = {
  label: "Chip With Icon",
  size: "small",
  variant: "filled",
  clickable: false,
  squarecorners : false,
  icon : <FaceIcon />
};