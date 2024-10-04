import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowBackOutlinedIcons } from "../../components/common/Icons/ArrowBackOutlinedIcon";

export default {
  title: "Components/Icons",
  component: ArrowBackOutlinedIcons,
} as ComponentMeta<typeof ArrowBackOutlinedIcons>;

const Template: ComponentStory<typeof ArrowBackOutlinedIcons> = (args) => (
  <ArrowBackOutlinedIcons {...args} />
);

export const ArrowBackOutlined = Template.bind({});
ArrowBackOutlined.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
