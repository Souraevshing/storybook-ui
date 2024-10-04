import React from "react";
import { SelectField } from "../components/common/Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/SelectField",
  component: SelectField,
  argTypes: {},
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args: any) => (
  <SelectField {...args} />
);

export const FilledSelect = Template.bind({});
FilledSelect.args = { placeholder: "select here" };
