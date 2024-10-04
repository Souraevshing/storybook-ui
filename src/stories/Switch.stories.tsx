import React from "react";
import { Switches } from "../components/common/Switch";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Switches",
  component: Switches,
  argTypes: {
    checked: {
      control: "boolean",
      description: "If true, the component is checked.",
    },
    color: {
      options: [
        "primary",
        "success",
        "default",
        "secondary",
        "error",
        "info",
        "warning",
      ],
      control: { type: "radio" },
      description: "The color of the Switch",
    },
    disabled: {
      control: "boolean",
      description: "If true, the component is disabled.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Status of the Switch",
    },
    edge: {
      options: ["end", "start", false],
      control: { type: "radio" },
      description: "Type of Switch body",
    },
    id: { control: "text", description: "The ID of the switch" },

    inputProps: {
      control: "object",
      description: "Attributes applied to the input element.",
    },

    onChange: {
      description: "Callback fired when the state is changed.",
    },

    size: {
      options: ["medium", "small"],
      control: { type: "radio" },
      description: "Size of the Switch",
    },

    value: {
      control: "text",
      description: "Value given to the Switch to link with label",
    },
  },
} as ComponentMeta<typeof Switches>;

const Template: ComponentStory<typeof Switches> = (args: any) => (
  <Switches {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
