import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckCircleOutlineIcons } from "../../components/common/Icons/CheckCircleOutlineIcon";

export default {
  title: "Components/Icons",
  component: CheckCircleOutlineIcons,
} as ComponentMeta<typeof CheckCircleOutlineIcons>;

const Template: ComponentStory<typeof CheckCircleOutlineIcons> = (args) => (
  <CheckCircleOutlineIcons {...args} />
);

export const CheckCircleOutline = Template.bind({});
CheckCircleOutline.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
