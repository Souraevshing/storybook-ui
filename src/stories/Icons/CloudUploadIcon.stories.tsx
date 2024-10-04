import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CloudUploadIcons } from "../../components/common/Icons/CloudUploadIcon";

export default {
  title: "Components/Icons",
  component: CloudUploadIcons,
} as ComponentMeta<typeof CloudUploadIcons>;

const Template: ComponentStory<typeof CloudUploadIcons> = (args) => (
  <CloudUploadIcons {...args} />
);

export const CloudUpload = Template.bind({});
CloudUpload.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
