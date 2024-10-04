import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MoreVertIcons } from "../../components/common/Icons/MoreVertIcon";

export default {
  title: "Components/Icons",
  component: MoreVertIcons,
} as ComponentMeta<typeof MoreVertIcons>;

const Template: ComponentStory<typeof MoreVertIcons> = (args) => (
  <MoreVertIcons {...args} />
);

export const MoreVert = Template.bind({});
MoreVert.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
