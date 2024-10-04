import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Filter, IFilterMenu } from "../components/common/Filter";
import dummyFilterData from "../utils/dummyFilter.json";
import { action } from "@storybook/addon-actions";
export default {
    title: "Components/Filter",
    component: Filter,
    argTypes: {
        label: {
            description:
                "filter label a JSX element so end user can use any UI he want",
        },
        filterHeaderLabel: {
            description: "filter header label",
        },
        childFilterHeaderLabel: {
            description: "child filter header label",
        },
        filterResetLabel: {
            description: "filter reset button label",
        },
        filterSubmitLabel: {
            description: "filter submit button label",
        },
        filterFieldsWithChildMenu: {
            description: "Array of object wrapped content to show",
        },
        isFilterOpen: {
            description: "default flag to mention filter is open or not",
        },
        onApplyFilter: {
            description: "Callback for apply filter event",
        },
        onFilterChange: {
            description: "Callback for filter change events like removing chips",
        },
        onResetFilter: {
            description: "Callback for reset filter event",
        },
        allowParentSearchBar: {
            description: "boolean to allow search bar for parent filter menu",
        },
        allowChildSearchBar: {
            description: "boolean to allow search bar for child filter menu",
        },
        defaultSelectedFilter: {
            description: 'set default selected filter'
        }
    },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => {
    return (
        <Filter
            {...args}
            onApplyFilter={(filterValues: IFilterMenu[]) => {
                // <--- on apply filter  --->
                action('on Applying filter ===> ')(filterValues);
            }}
            onFilterChange={(filterValues: IFilterMenu[]) => {
                // <--- on filter changes  --->
                action('on filter change event ===> ')(filterValues);
            }}
            onResetFilter={() => {
                // <--- on reset filter  --->
                action('on reset filter event ===> ');
            }}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    label: (
        <button className="filter-common-button primary">  Filter </button>
    ),
    filterHeaderLabel: "All Filters",
    childFilterHeaderLabel: "Key Differentiators",
    filterFieldsWithChildMenu: dummyFilterData,
    allowParentSearchBar: true,
    allowChildSearchBar: true,
    isFilterOpen: false,
    defaultSelectedFilter: null
};
