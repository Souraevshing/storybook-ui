import { Label } from "../components/common/Label";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default {
    title: "Components/Label",
    component: Label,
    argTypes: {
        textcolor: {
            control: "color",
            description: "The color of the component. It supports both default and custom theme colors, which can be added as shown in the palette customization guide.",
        },
        backgroundColor : {
            control: "color",
            description: "The background color of the component"
        },
        size: { control: "radio", description: "The size of the component." },

        label: { control: "text", description: "The content of the component" },

        icon: { control: "object", description: "Add icon to the chip(optional)" },

        deletable : { control : "boolean", description : "Adding this prop will add a delete button besides the label"},

        onDelete: { control: "click", description : "Add delete function here" },

        required : { control : "boolean", description : "Setting this to true will add a required field star i.e *"}
    }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
<Label {...args} />
)

export const Basic = Template.bind({});
Basic.args = {
    label: "Basic Text",
    size: "small",
    textcolor: "#1A577E",
    deletable: false
}

export const WithIcon = Template.bind({});
WithIcon.args = {
    label: "Text with icon",
    size: "small",
    textcolor: "#1A577E",
    icon: <ErrorOutlineIcon />,
    deletable: false
}

export const Deletable = Template.bind({});
Deletable.args = {
    label: "Deletable",
    size: "small",
    textcolor: "#1A577E",
    deletable: true,
}


export const Mandatory = Template.bind({});
Mandatory.args = {
    label: "Mandatory",
    size: "small",
    textcolor: "#1A577E",
    required : true
}
