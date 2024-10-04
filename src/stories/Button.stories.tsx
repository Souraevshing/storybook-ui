import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/common/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      description: "The size of the button",
    },
    accent: {
      description: "The color or accent for the button",
    },
    onClick: {
      description: "Callback for onclick event",
      control: {
        type: "button",
      },
    },
    customClasses: {
      description: "To add extra custom classes",
    },
    content: {
      description: "Content of the button",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  accent: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  accent: "secondary",
  children: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Button",
};
