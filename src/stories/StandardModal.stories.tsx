import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StandardModal } from "../components/common/StandardModal";

export default {
  title: "Components/StandardModal",
  component: StandardModal,
  argTypes: {
    openModal: {
      control: "boolean",
      description: "To control modal open or close",
    },
    setModalState: {
      description: "To set the modal state when action is closed ",
    },
    bodyContent: { description: "Modal body content" },
    modalId: { description: "modal ID" },
    contentClasses: {
      description: "default content classes used to controlling styles",
    },
    PrimaryButton: { description: "Primary button in the modal" },
    SecondaryButton: { description: "Secondary button in the modal" },
    baseChildren: { description: "the text inside the base button" },
    bodyTitle: { description: "modal content body content" },
    onSubmit: { description: "the default action when submitting the modal" },
  },
} as ComponentMeta<typeof StandardModal>;

const Template: ComponentStory<typeof StandardModal> = (args) => (
  <StandardModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  bodyTitle: "Are you sure you want to delete the image?",
  PrimaryButton: "Delete",
  SecondaryButton: "Cancel",
  openModal: true,
  baseChildren: "open",
  secondaryButtonAction: "cancel",
};
