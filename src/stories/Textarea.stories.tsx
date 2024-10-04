import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Textarea } from "../components/common/Textarea";

export default {
    title: "Components/Textarea",
    component: Textarea,
    argsTypes: {
        placeholder: {
            control: "text",
            description: "Placeholder"
        },
        onChange: {
            description: "Pass a function inside on change event"
        },
        id: {
            control: "text",
            description: "ID for the field"
        },
        disabled: {
            control: "boolean",
            description: "If set this to true then field will be disabled"
        },
        width: {
            control: "string",
            description: "Width of the field in pixels"
        },
        height: {
            control: "string",
            description: "Height of the field in pixels"
        },
        minRows: {
            control: "number",
            description: "Minimum number of rows"
        },
        maxRows: {
            control: "number",
            description: "Maximum number of rows"
        },
        value: {
            control: "text",
            description: "Set value of the field"
        },
        label: {
            control: "text",
            description: "Label for the field"
        },
        minLength: {
            control: "number",
            description: "Minimum number of characters allowed"
        },
        maxLength: {
            control: "number",
            description: "Maximum number of characters allowed"
        },
        customclasses: {
            control: "text",
            description: "You can pass custom class to style"
        }
    }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
    <Textarea {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
    placeholder: "Enter here",
    required: true,
    width: '472px',
    label: "Description",
    disabled: false,
    maxRows: 20,
    minRows: 10,
    id: "textarea",
    maxLength: 20,
    minLength: 5
};