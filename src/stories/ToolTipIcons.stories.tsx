import { TooltipsIcons } from "../components/common/TooltipsIcons";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default {
    title: "Components/TooltipsIcons",
    component: TooltipsIcons,
    decorators: [(Story) => <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}><Story /></div>],
    argTypes: {
        icon: {
            control: "object",
            description: "Add the icon you need for eg. warning, errors, etc",
        },
        tooltipText: {
            control: "text",
            description: "Tool tip message",
        },
        toolposition: {
            description: "Tool tip position"
        }
    },
} as ComponentMeta<typeof TooltipsIcons>;

const Template: ComponentStory<typeof TooltipsIcons> = (args) => (
    <TooltipsIcons {...args} />
);

export const Tooltiptop = Template.bind({});
Tooltiptop.args = {
    icon: <InfoOutlinedIcon />,
    tooltipText: "Tool tip message",
    toolposition: "top"
};

export const Tooltipright = Template.bind({});
Tooltipright.args = {
    icon: <InfoOutlinedIcon />,
    tooltipText: "Tool tip message",
    toolposition: "right"
};

export const Tooltipbottom = Template.bind({});
Tooltipbottom.args = {
    icon: <InfoOutlinedIcon />,
    tooltipText: "Tool tip message",
    toolposition: "bottom"
};

export const Tooltipleft = Template.bind({});
Tooltipleft.args = {
    icon: <InfoOutlinedIcon />,
    tooltipText: "Tool tip message",
    toolposition: "left"
};