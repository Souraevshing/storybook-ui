import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DeleteIcons } from "../../components/common/Icons/DeleteIcon";

export default {
  title: "Components/Icons",
  component: DeleteIcons,
} as ComponentMeta<typeof DeleteIcons>;

const Template: ComponentStory<typeof DeleteIcons> = (args) => <DeleteIcons />;

export const DeleteAlt = Template.bind({});
DeleteAlt.args = {
  color: "primary",
};
