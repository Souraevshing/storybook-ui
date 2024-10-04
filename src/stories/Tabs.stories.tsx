import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Tabswitch} from "../components/common/Tabs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Tabs",
    component: Tabswitch,
  argTypes: {
    tab1: {
        description: "Pass any data to this prop to print it in tab 1"
    },
    tab2: {
        description: "Pass any data to this prop to print it in tab 2"
    },
	
	}
} as ComponentMeta<typeof Tabswitch>;

const Template: ComponentStory<typeof Tabswitch> = (args) => <Tabswitch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tab1: "Tab1",
    tab2: "Tab2"
};
