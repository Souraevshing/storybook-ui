import React from "react";
import { Meta, Story } from "@storybook/react";
import { ArrowIcon } from "../../components/common/Icons/ArrowIcon";

const meta: Meta = {
  title: "Components/Icons",
  component: ArrowIcon,
};

export default meta;

const Template: Story = () => <ArrowIcon />;

export const FigmaArrowIcon = Template.bind({});
