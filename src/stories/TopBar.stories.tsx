import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { TopBar } from "../components/common/TopBar";

export default {
  title: "Components/TopBar",
  component: TopBar,
  argTypes: {
    tabs: [
      {
        label: "Home",
        path: "/home",
        active: true,
      },
      {
        label: "About",
        path: "/about",
        active: false,
      },
      {
        label: "Contact Us",
        path: "/contact-us",
        active: false,
      },
      {
        label: "FAQ",
        path: "/faq",
        active: false,
      },
    ],
    getTab: action("clicked"),
  },
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      label: "Home",
      path: "/home",
      active: true,
    },
    {
      label: "About",
      path: "/about",
      active: false,
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      active: false,
    },
    {
      label: "FAQ",
      path: "/faq",
      active: false,
    },
  ],
  getTab: action("clicked"),
};

export const DisableTab = Template.bind({});
DisableTab.args = {
  tabs: [
    {
      label: "Home",
      path: "/home",
      active: true,
    },
    {
      label: "About",
      path: "/about",
      active: false,
    },
    {
      label: "Contact Us",
      path: "/contact-us",
      active: false,
    },
    {
      label: "FAQ",
      path: "/faq",
      active: false,
      disable: true,
    },
  ],
  getTab: action("clicked"),
};

export const customWidth = Template.bind({});
customWidth.args = {
  tabs: [
    {
      label: "Home",
      path: "/home",
      active: true,
    },
    {
      label: "About",
      path: "/about",
      active: false,
    },
  ],
  getTab: action("clicked"),
  width: 200,
};
