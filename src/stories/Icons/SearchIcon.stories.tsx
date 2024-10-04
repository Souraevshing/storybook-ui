import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchIcons } from "../../components/common/Icons/SearchIcon";

export default {
  title: "Components/Icons",
  component: SearchIcons,
} as ComponentMeta<typeof SearchIcons>;

const Template: ComponentStory<typeof SearchIcons> = (args) => (
  <SearchIcons {...args} />
);

export const Search = Template.bind({});
Search.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
