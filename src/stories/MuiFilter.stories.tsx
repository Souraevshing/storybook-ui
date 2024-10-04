import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IFilterMenu } from "../components/common/Filter";
import { MuiFilter, IFilterMenuV2 } from "../components/common/MuiFilter";
import { action } from "@storybook/addon-actions";
export default {
    title: "Components/MuiFilter",
    component: MuiFilter,
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
} as ComponentMeta<typeof MuiFilter>;

const Template: ComponentStory<typeof MuiFilter> = (args) => {
    return (
        <MuiFilter
            {...args}
            onApplyFilter={(filterValues: IFilterMenuV2[]) => {
                action('on Applying filter ===> ')(filterValues);
                // <--- on apply filter  --->
            }}
            onFilterChange={(filterValues: IFilterMenuV2[]) => {
                action('on filter change event ===> ')(filterValues);
                // <--- on filter changes  --->
            }}
            onResetFilter={() => {
                action('on Reset filter ===> ')([]);
                // <--- on reset filter  --->
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
    childFilterHeaderLabel: "Column Name",
    filterFieldsWithChildMenu: [
        {
            "id": 1,
            "columnId": "col_2",
            "columnName": "Text + Color label",            
            "type": "text",
            "children": [
                { "id": 11, "value": "Reforestation" },
                { "id": 21, "value": "Social" },
                { "id": 31, "value": "Renewable" }
            ]
        },
        {
            "id": 2,
            "columnId": "col_3",
            "columnName": "Color label",            
            "type": "label",
            "children": [
                { "id": 41, "value": "Active" },
                { "id": 51, "value": "Pending" },
                { "id": 61, "value": "Inactive" }
            ]
        },
        {
            "id": 3,
            "columnId": "col_5",
            "columnName": "Text + Subtext",            
            "type": "text",
            "children": [
                { "id": 71, "value": "Shirt" },
                { "id": 81, "value": "T-Shirt" }
            ]
        }
    ]
    ,
    allowParentSearchBar: true,
    allowChildSearchBar: true,
    isFilterOpen: false,
    defaultSelectedFilter: null
};
