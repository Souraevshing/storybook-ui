import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  SidebarSubMenu,
  SidebarSubMenuProps,
} from "../components/common/SideBarSubMenu";
import sideBarData from "../utils/sidebar.json";

const meta: Meta = {
  title: "Components/SideBarSubMenu",
  component: SidebarSubMenu,
};

export default meta;

const Template: Story<SidebarSubMenuProps> = (args) => (
  <SidebarSubMenu {...args} />
);

export const Settings = Template.bind({});
Settings.args = {
  sidebarData: [...sideBarData],
};
