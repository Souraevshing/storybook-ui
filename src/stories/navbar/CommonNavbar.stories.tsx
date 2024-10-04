import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CommonNavbarTemplate } from "../../components/common/navbar/Common.navbar";
import { dummyNavContents } from "../../components/common/navbar/dummyContent.navbar";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Navbar",
  component: CommonNavbarTemplate,
  argTypes: {
    navIcon: {
      description: "navbar Icon to show on left side top.",
    },
    customNavClass: {
      describe: "custom navbar class to apply additional css",
    },
    navHeader: {
      description: "navbar header to show right after nav icon.",
    },
    actionItems: {
      description:
        "Allows to show search bar, notification and custom element which end user want to show.",
    },
    profileItems: {
      description:
        "Showing user profiles like roles, name with icon and allowing some dropdown inputs to show.",
    },
    onMenuSelect: {
      description: "when user select any menus from the menu item",
    },
  },
} as ComponentMeta<typeof CommonNavbarTemplate>;

const CommonTemplate: ComponentStory<typeof CommonNavbarTemplate> = (args) => {
  return (
    <CommonNavbarTemplate
      {...args}
      onMenuSelect={(menus) => {
        // on selecting specific menu
        action("Menu Selected Clicked")(menus);
      }}
    />
  );
};

const {
  dummyNavIcon,
  dummyCustomNavClass,
  dummyActionItems,
  dummyNavHeader,
  dummyProfileItems,
} = dummyNavContents;

export const Default = CommonTemplate.bind({});
Default.args = {
  navIcon: dummyNavIcon,
  customNavClass: dummyCustomNavClass,
  navHeader: dummyNavHeader,
  actionItems: dummyActionItems,
  profileItems: dummyProfileItems,
};
