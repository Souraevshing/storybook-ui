import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  SearchField,
  SearchFieldProps,
} from "../components/common/SearchField";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/SearchField",
  component: SearchField,
  argTypes: {
    action: {
      action: "clicked",
    },
  },
};

export default meta;

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />;

export const Search = Template.bind({});
Search.args = {
  action: action("clicked"),
};
