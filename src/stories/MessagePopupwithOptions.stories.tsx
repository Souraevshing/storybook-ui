import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MessagePopupWithOptions } from "../components/common/MessagePopupwithOptions";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

export default {
  title: "Components/MessagePopupWithOptions",
  component: MessagePopupWithOptions,
  argTypes: {
    action: {
      description:
        "The action to display. It renders after the message, at the end of the alert.",
    },
    children: { description: "The content of the component." },
    classes: {
      description: "Override or extend the styles applied to the component.",
    },
    closeText: {
      description:
        "Override the default label for the close popup icon button.For localization purposes, you can use the provided translations.",
    },
    color: {
      description:
        "The color of the component. Unless provided, the value is taken from the severity prop.",
    },
    icon: {
      description:
        "Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the severity prop. Set to false to remove the icon.",
    },
    iconMapping: {
      description:
        "The component maps the severity prop to a range of different icons, for instance success to <SuccessOutlined>. If you wish to change this mapping, you can provide your own. Alternatively, you can use the icon prop to override the icon displayed.",
    },
    onClose: {
      description:
        "Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon button is displayed that triggers the callback when clicked.",
    },
    role: { description: "The ARIA role attribute of the element." },
    severity: {
      description:
        "The severity of the alert. This defines the color and icon used.",
    },
    sx: {
      description:
        "The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.",
    },
    variant: { description: "The variant to use." },
    TitleChildren: { description: "The content of the Title" },
    TitleClasses: {
      description: "Override or extend the styles applied to the Title",
    },
    TitleSx: {
      description:
        "The system prop that allows defining system overrides as well as additional CSS styles",
    },
    setOpen: { description: "control popup" },
  },
} as ComponentMeta<typeof MessagePopupWithOptions>;

const Template: ComponentStory<typeof MessagePopupWithOptions> = (args) => (
  <MessagePopupWithOptions {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  anchorOrigin: {
    horizontal: "right",
    vertical: "bottom",
  },
  open: true,
  autoHideDuration: 300000,
  baseChildren: "open",
  TitleChildren: "Succesfully accepted !",
  childrenDescription: "Not if any",
  PrimaryButton: "No, Cancel",
  SecondaryButton: "Yes, Confirm",
  primaryButtonAction: () => {
    console.log("primary");
  },
  secondaryButtonAction: () => {
    console.log("secondary");
  },
};
