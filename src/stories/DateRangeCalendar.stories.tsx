import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  DateRangeCalendar,
  DateRangeProps,
} from "../components/common/DateRangeCalendar";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/Date/DateRangeCalendar",
  component: DateRangeCalendar,
  argTypes: {
    onCancel: {
      action: "clicked",
    },
    onsubmit: {
      action: "clicked",
    },
  },
};

export default meta;

const Template: Story<DateRangeProps> = (args) => (
  <DateRangeCalendar {...args} />
);

export const DateRange = Template.bind({});
DateRange.args = {
  onCancel: action("cancel"),
  onSubmit: action("submit"),
  getRange: action("clicked"),
};

export const customRange = Template.bind({});
customRange.args = {
  onCancel: action("cancel"),
  onSubmit: action("submit"),
  getRange: action("clicked"),
  SetRange: { startDate: "12/6/22", endDate: "12/25/22" },
};
