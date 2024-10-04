import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TuneOutlinedIcons } from "../../components/common/Icons/TuneOutlinedIcon";

export default {
  title: "Components/Icons",
  component: TuneOutlinedIcons,
} as ComponentMeta<typeof TuneOutlinedIcons>;

const Template: ComponentStory<typeof TuneOutlinedIcons> = (args) => (
  <TuneOutlinedIcons {...args} />
);

export const TuneOutlined = Template.bind({});
TuneOutlined.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
