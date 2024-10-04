import { Meta, Story } from "@storybook/react";
import React from "react";
import { BreadCrumb, BreadCrumbProps } from "../components/common/BreadCrumb";

const meta: Meta = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};

export default meta;

const Template: Story<BreadCrumbProps> = (args) => <BreadCrumb {...args} />;

export const BasicBreadCrumb = Template.bind({});
BasicBreadCrumb.args = {
  bread: [{ label: "Home", href: "/" }, { label: "Create Product" }],
};
