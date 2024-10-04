import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InfoOutlinedIcons } from "../../components/common/Icons/InfoIcon";

export default {
  title: "Components/Icons",
  component: InfoOutlinedIcons,
} as ComponentMeta<typeof InfoOutlinedIcons>;

const Template: ComponentStory<typeof InfoOutlinedIcons> = (args) => (
  <InfoOutlinedIcons {...args} />
);

export const Info = Template.bind({});
Info.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
