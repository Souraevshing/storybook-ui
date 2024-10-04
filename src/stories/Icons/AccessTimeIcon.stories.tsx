import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccessTimeIcons } from "../../components/common/Icons/AccessTimeIcon";

export default {
  title: "Components/Icons",
  component: AccessTimeIcons,
} as ComponentMeta<typeof AccessTimeIcons>;

const Template: ComponentStory<typeof AccessTimeIcons> = (args) => (
  <AccessTimeIcons {...args} />
);

export const AccessTime = Template.bind({});
AccessTime.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
