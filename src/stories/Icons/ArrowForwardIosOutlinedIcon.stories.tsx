import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowForwardIosOutlinedIcons } from "../../components/common/Icons/ArrowForwardIosOutlinedIcon";

export default {
  title: "Components/Icons",
  component: ArrowForwardIosOutlinedIcons,
} as ComponentMeta<typeof ArrowForwardIosOutlinedIcons>;

const Template: ComponentStory<typeof ArrowForwardIosOutlinedIcons> = (
  args
) => <ArrowForwardIosOutlinedIcons {...args} />;

export const ArrowForwardIosOutlined = Template.bind({});
ArrowForwardIosOutlined.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
