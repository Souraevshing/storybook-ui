import React from "react";
import { Meta, Story } from "@storybook/react";
import { TabView, TabViewProps } from "../components/common/TabView";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/TabView",
  component: TabView,
};

export default meta;

const Template: Story<TabViewProps> = (args) => <TabView {...args} />;

export const TopBar = Template.bind({});
TopBar.args = {
  tabs: [
    {
      label: "Linked(20)",
      path: "/linked",
      active: true,
    },
    {
      label: "Unlinked(15)",
      path: "/unlinked",
      active: false,
    },
  ],
  getTab: action("clicked"),
};
