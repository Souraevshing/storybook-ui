import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BasicMenu from "../components/common/Menu";

export default {
  title: "Components/Menu",
  component: BasicMenu,
  argTypes: {
    autoFocus: {
      control: "boolean",
      description:
        "If true (Default) will focus the [role='menu'] if no focusable child is found. Disabled children are not focusable. If you set this prop to false focus will be placed on the parent modal container. This has severe accessibility implications and should only be considered if you manage focus otherwise.",
    },
    children: { description: "Menu contents, normally MenuItems." },
    classes: {
      control: "object",
      description: "Override or extend the styles applied to the component.",
    },
    disableAutoFocusItem: {
      control: "boolean",
      description:
        "When opening the menu will not focus the active item but the [role='menu'] unless autoFocus is also set to false. Not using the default means not following WAI-ARIA authoring practices. Please be considerate about possible accessibility implications.",
    },
    MenuListProps: {
      control: "object",
      description: "Props applied to the MenuList element.",
    },
    onClose: { description: "The event source of the callback." },
    open: {
      control: "boolean",
      description: "If true, the component is shown.",
    },
    PopoverClasses: {
      control: "object",
      description: "classes prop applied to the Popover element.",
    },
    transitionDuration: {
      control: "number",
      description: "The length of the transition in ms, or 'auto'",
    },
    TransitionProps: {
      control: "object",
      description:
        "Props applied to the transition element. By default, the element is based on this Transition component.",
    },
    variant: {
      control: "select",
      description:
        "The variant to use. Use menu to prevent selected items from impacting the initial focus.",
    },
  },
} as ComponentMeta<typeof BasicMenu>;

const Template: ComponentStory<typeof BasicMenu> = (args) => (
  <BasicMenu {...args} />
);

export const MenuItem = Template.bind({});
MenuItem.args = { open: false };
