import React from "react";
import { Meta, Story } from "@storybook/react";
import { DatePicker, DateProps } from "../components/common/DatePicker";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/Date/DatePicker",
  component: DatePicker,
  argTypes: {
    dateFormat: {
      description: "use to select different types of date format",
    },
    getDate: {
      action: "clicked",
      description: "use to get date from calendar",
    },
    setDate: {
      description:
        "use to set date try with this format only `MM/dd/yyyy` or `MM-dd-yyyy`",
    },
    
  },
};

export default meta;

const Template: Story<DateProps> = (args) => (
  <div style={{ marginLeft: "55px" }}>
    <DatePicker {...args} />
  </div>
);

export const Date = Template.bind({});
Date.args = {
  dateFormat: "dd-MM-yyyy",
  getDate: action("clicked"),
  placeholder : "DOB"
};

export const PredefinedDate = Template.bind({});
PredefinedDate.args = {
  dateFormat: "dd-MM-yyyy",
  getDate: action("clicked"),
  setDate: "12/06/23",
};
