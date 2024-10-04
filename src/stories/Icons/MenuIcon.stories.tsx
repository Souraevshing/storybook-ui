import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuIcons } from "../../components/common/Icons/MenuIcon";

export default {
  title: "Components/Icons",
  component: MenuIcons,
} as ComponentMeta<typeof MenuIcons>;

const Template: ComponentStory<typeof MenuIcons> = (args) => (
  <MenuIcons {...args} />
);

export const Menu = Template.bind({});
Menu.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
