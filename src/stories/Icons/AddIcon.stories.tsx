import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddIcon } from "../../components/common/Icons/AddIcon";

export default {
  title: "Components/Icons",
  component: AddIcon,
} as ComponentMeta<typeof AddIcon>;

const Template: ComponentStory<typeof AddIcon> = (args) => (
  <AddIcon {...args} />
);

export const Add = Template.bind({});
Add.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
