import React from "react";
import { Meta, Story } from "@storybook/react";
import { CalendarIcon } from "../../components/common/Icons/CalendarIcon";

const meta: Meta = {
  title: "Components/Icons",
  component: CalendarIcon,
};

export default meta;

const Template: Story = () => <CalendarIcon />;

export const calendar = Template.bind({});
