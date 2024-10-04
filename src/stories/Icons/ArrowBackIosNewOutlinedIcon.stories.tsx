import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowBackIosNewOutlinedIcons } from "../../components/common/Icons/ArrowBackIosNewOutlinedIcon";

export default {
  title: "Components/Icons",
  component: ArrowBackIosNewOutlinedIcons,
} as ComponentMeta<typeof ArrowBackIosNewOutlinedIcons>;

const Template: ComponentStory<typeof ArrowBackIosNewOutlinedIcons> = (
  args
) => <ArrowBackIosNewOutlinedIcons {...args} />;

export const ArrowBackIosNewOutlined = Template.bind({});
ArrowBackIosNewOutlined.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
