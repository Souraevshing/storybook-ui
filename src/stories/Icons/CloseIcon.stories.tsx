import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CloseIcons } from "../../components/common/Icons/CloseIcon";

export default {
  title: "Components/Icons",
  component: CloseIcons,
} as ComponentMeta<typeof CloseIcons>;

const Template: ComponentStory<typeof CloseIcons> = (args) => (
  <CloseIcons {...args} />
);

export const Close = Template.bind({});
Close.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
