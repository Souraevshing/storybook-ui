import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CheckBoxes from "../components/common/Checkbox";

export default {
  title: "Components/Checkbox",
  component: CheckBoxes,
  argTypes: {
    labelText: {
      control: "text",
      description: "Label text applies to the checkbox",
    },
    value: {
      control: "object",
      description: "value given to the checkbox",
    },
    name: {
      control: "text",
      description: "Name given to the checkbox",
    },
    id: {
      control: "text",
      description: "id given to the checkbox",
    },
  },
} as ComponentMeta<typeof CheckBoxes>;

const Template: ComponentStory<typeof CheckBoxes> = (args) => (
  <CheckBoxes {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  labelText: "Checkbox",
};
