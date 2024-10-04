import React from "react";
import { BreadCrumNav } from "../components/common/BreadCrumbNav";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/BreadCrumNav",
  component: BreadCrumNav,
  argTypes: {},
} as ComponentMeta<typeof BreadCrumNav>;

const Template: ComponentStory<typeof BreadCrumNav> = (args: any) => (
  <BreadCrumNav {...args} />
);

export const Standerd = Template.bind({});
Standerd.args = {
  tabsList: ['Basic Information', 'About', 'Preview & Publish'],
  activeTab: 0
};
