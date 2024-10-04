import React from "react";
import Progressbar from "../components/common/Progressbar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Progressbar",
  component: Progressbar,
  argTypes: {
    label: {
      description: "used for setting label",
    },
    max: {
      control: "number",
      description: "maximum value on the scale of progressbar",
    },
    value: {
      control: "number",
      description: "value on the scale of progressbar",
    },
    id: {
      control: "text",
      description: "id",
    },
  },
} as ComponentMeta<typeof Progressbar>;

const Template: ComponentStory<typeof Progressbar> = (args: any) => (
  <Progressbar {...args} />
);

export const Linear = Template.bind({});
Linear.args = { max: 100, value: 45, label: "Bulk Upload" };
