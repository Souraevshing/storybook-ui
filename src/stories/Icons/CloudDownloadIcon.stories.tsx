import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CloudDownloadIcons } from "../../components/common/Icons/CloudDownloadIcon";

export default {
  title: "Components/Icons",
  component: CloudDownloadIcons,
} as ComponentMeta<typeof CloudDownloadIcons>;

const Template: ComponentStory<typeof CloudDownloadIcons> = (args) => (
  <CloudDownloadIcons {...args} />
);

export const CloudDownload = Template.bind({});
CloudDownload.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
