import { LcaSidebar, ILCASidebarItem } from '../../components/common/sidebar/lca.sidebar';
import React from "react";
import { LCASidebarContent } from '../../components/common/sidebar/dummyContent.sidebar';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Sidebar',
    component: LcaSidebar,
    argTypes: {
        sidebarDetails: {
            description: 'array of object to show list of menus'
        },
        customSidebarClasses: {
            description: 'custom sidebar classes',
        },
        defaultSelectedMenu: {
            description: 'setting up the default selected menu by applying id and path '
        },
        onMenuClick: {
            'description': 'on menu click callback',
        }
    }
} as ComponentMeta<typeof LcaSidebar>;


const lca: ComponentStory<typeof LcaSidebar> = (args) => {
    return (
        <LcaSidebar {...args} onMenuClick={(menuItem: ILCASidebarItem) => {
            //  <--- on menu click  --->
            action('menu item selected --- ')(menuItem);
        }} />
    );
};


export const LCASidebar = lca.bind({});

LCASidebar.args = {
    // LCASidebarContent
    sidebarDetails: LCASidebarContent,
    defaultSelectedMenu: {
        id: LCASidebarContent[0].id,
        default_slug: LCASidebarContent[0].path,
    },
    customSidebarClasses: ''
}