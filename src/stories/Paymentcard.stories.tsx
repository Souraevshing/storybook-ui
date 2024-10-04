import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Paymentcards } from "../components/common/Paymentcards";

export default {
  title: "Components/Paymentcards",
  component: Paymentcards
} as ComponentMeta<typeof Paymentcards>;

const Template: ComponentStory<typeof Paymentcards> = (args) => <Paymentcards {...args} />;

export const Selected = Template.bind({});
Selected.args = {
    heading : "Invoice",
    description : "50 USD/month",
    width : '325px',
    id : 1213435325,
    selected : true,
    info : "random text",
};