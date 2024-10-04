import React from "react";
import {SummaryCards} from "../components/common/SummaryCards";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/SummaryCards",
  component: SummaryCards,
} as ComponentMeta<typeof SummaryCards>;

const Template: ComponentStory<typeof SummaryCards> = (args) => (
  <SummaryCards {...args} />
);

export const card = Template.bind({});
card.args = {
  title: "Total Units Processed",
  value: "25,000,000",
  currency: "",
};

export const card2 = Template.bind({});
card2.args = {
  link: "View Impact",
  icon: true,
};
