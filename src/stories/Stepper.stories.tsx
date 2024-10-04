import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Steppers } from "../components/common/Stepper";

export default {
  title: "Components/Stepper",
  component: Steppers,
  argTypes: {},
} as ComponentMeta<typeof Steppers>;

const Template: ComponentStory<typeof Steppers> = (args) => (
  <Steppers {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  steps: [
    "Basic details",
    "Verifiers",
    "About",
    "Images & Video",
    "Preview & Publish",
  ],
  activeStep: 2,
};
