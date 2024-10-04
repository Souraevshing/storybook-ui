import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NotificationsNoneOutlinedIcons } from "../../components/common/Icons/NotificationsNoneOutlinedIcon";

export default {
  title: "Components/Icons",
  component: NotificationsNoneOutlinedIcons,
} as ComponentMeta<typeof NotificationsNoneOutlinedIcons>;

const Template: ComponentStory<typeof NotificationsNoneOutlinedIcons> = (
  args
) => <NotificationsNoneOutlinedIcons {...args} />;

export const NotificationsNoneOutlined = Template.bind({});
NotificationsNoneOutlined.args = {
  color: "primary",
  size: "medium",
  onClick: () => console.log("clicked")
};
