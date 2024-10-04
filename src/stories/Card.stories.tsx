import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {Cards} from "../components/common/Cards";

export default {
  title: "Components/Cards",
  component: Cards
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <Cards {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: "323px",
  height: "auto",
  headtext: "BASIC",
  price: 250
};
