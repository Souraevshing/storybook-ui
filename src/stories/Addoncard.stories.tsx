import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AddonCard } from "../components/common/AddonCard";

export default {
  title: "Components/AddonCard",
  component: AddonCard
} as ComponentMeta<typeof AddonCard>;

const Template: ComponentStory<typeof AddonCard> = (args) => <AddonCard {...args} />;

export const Selected = Template.bind({});
Selected.args = {
  heading: "Stores",
  description: "50 USD/month",
  width: '396px',
  operation_controls: false,
  numberofaddons : 5,
  selected: true
};

export const WithOperations = Template.bind({});
WithOperations.args = {
  heading: "Stores",
  description: "50 USD/month",
  width: '396px',
  operation_controls: true,
  max : false,
};

export const WithMaxValue = Template.bind({});
WithMaxValue.args = {
  heading: "Stores",
  description: "50 USD/month",
  width: '396px',
  operation_controls: true,
  max : true,
};

export const WithoutOperations = Template.bind({});
WithoutOperations.args = {
  heading: "Stores",
  description: "50 USD/month",
  width: '396px',
  operation_controls: false,
  max : false,
  selected: false
};