import React from "react";
import { CustomerNavbarTemplate } from '../../components/common/navbar/Customer.navbar';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { dummyCustomerNavContent } from "../../components/common/navbar/dummyContent.navbar";
import { action } from "@storybook/addon-actions";


export default {
    title: "Components/Navbar",
    component: CustomerNavbarTemplate,
    argTypes: {
        navIcon: {
            description: 'navbar Icon to show on left side top.'
        },
        navHeader: {
            description: 'navbar header to show right after nav icon.'
        },
        actionItems: {
            description: 'Allows to show search bar, notification and custom element which end user want to show.'
        },
        profileItems: {
            description: 'Showing user profiles like roles, name with icon and allowing some dropdown inputs to show.'
        },
        onMenuSelect: {
            description: 'when user select any menus from the menu item'
        }
    },
} as ComponentMeta<typeof CustomerNavbarTemplate>;

const CustomerNavTemplate: ComponentStory<typeof CustomerNavbarTemplate> = (args) => {
    return (
        <>
            <CustomerNavbarTemplate  {...args} onMenuSelect={(menus) => {
                // on selecting specific menu
                action('on menu select clicked')(menus);
            }} />
        </>
    );
};

const { dummyActionItems, dummyCustomNavClass, dummyNavHeader, dummyNavIcon, dummyProfileItems } = dummyCustomerNavContent;

export const Customer = CustomerNavTemplate.bind({});
Customer.args = {
    navIcon: dummyNavIcon,
    customNavClass: dummyCustomNavClass,
    navHeader: dummyNavHeader,
    actionItems: dummyActionItems,
    profileItems: dummyProfileItems
};


