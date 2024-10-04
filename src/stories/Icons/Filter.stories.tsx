import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterAltIcons } from "../../components/common/Icons/FilterAltIcon";

export default {
  title: "Components/Icons",
  component: FilterAltIcons,
} as ComponentMeta<typeof FilterAltIcons>;

const Template: ComponentStory<typeof FilterAltIcons> = (args) => (
  <FilterAltIcons {...args} />
);

export const FilterAlt = Template.bind({});
FilterAlt.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
