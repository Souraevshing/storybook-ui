import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { KeyboardArrowDownOutlinedIcons } from "../../components/common/Icons/KeyboardArrowDownOutlinedIcon";

export default {
  title: "Components/Icons",
  component: KeyboardArrowDownOutlinedIcons,
} as ComponentMeta<typeof KeyboardArrowDownOutlinedIcons>;

const Template: ComponentStory<typeof KeyboardArrowDownOutlinedIcons> = (
  args
) => <KeyboardArrowDownOutlinedIcons {...args} />;

export const KeyboardArrowDownOutlined = Template.bind({});
KeyboardArrowDownOutlined.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
