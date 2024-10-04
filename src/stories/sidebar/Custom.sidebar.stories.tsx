import React from "react";
import { CustomSidebar, IMenuItem } from '../../components/common/sidebar/custom.sidebar'
import { CONSTANCE, offsetSidebarContent } from '../../components/common/sidebar/dummyContent.sidebar';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Components/Sidebar',
    component: CustomSidebar,
    argTypes: {
        sidebarItem: {
            description: 'sidebar content to show on sidebar menu'
        },
        alignMenus: {
            description: 'perform alignment on menus as per requirement',
        },
        currentRoute: {
            description: 'current selected path of the menu'
        },
        attachChileBar: {
            description: 'flag to attach child bar with sidebar ',
        },
        showChildIcons: {
            description: 'allowing user to set icons for child menu'
        },
        customClasses: {
            control: "object",
            description: 'custom classes for sidebar, child sidebar and more...'
        },
        // allowChildSidebarToggle: {
        //     description: 'allowing child bar toggle event'
        // },
        theme: {
            options: [CONSTANCE.SIDEBAR_THEME.default, CONSTANCE.SIDEBAR_THEME.blueish],
            control: "radio",
            description: 'apply color theme as per requirement'
        }
    }
} as ComponentMeta<typeof CustomSidebar>;


const Template: ComponentStory<typeof CustomSidebar> = (args) => {
    return (
        <CustomSidebar {...args} onMenuSelect={(selectedMenu: IMenuItem, isChild: boolean) => {
            action('On menu selection callback event with route selection ( true it that menu is child, false if menu is single or parent) --> ')(selectedMenu, isChild);
        }} />
    );
};


export const Custom = Template.bind({});

Custom.args = {
    sidebarItem: offsetSidebarContent.map((sidebarItem) => {
        return {
            title: sidebarItem.title,
            icon: sidebarItem.icon,
            path: sidebarItem.link,
            child: sidebarItem.sidebar_child_items.map((child_items) => {
                return {
                    title: child_items.title,
                    path: child_items.link,
                    icon: child_items.icon,
                }
            })
        }
    }),
    alignMenus: false,
    attachChileBar: true,
    showChildIcons: true,
    // allowChildSidebarToggle: true,
    currentRoute: '/',
    customClasses: {
        sidebar_content: '',
        child_sidebar_content: ''
    },
    theme: CONSTANCE.SIDEBAR_THEME.default
}