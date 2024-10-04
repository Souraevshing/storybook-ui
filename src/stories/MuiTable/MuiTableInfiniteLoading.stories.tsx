import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MuiTableInfiniteLoading } from "../../components/common/MuiTable/InfiniteLoading";
import customColumns from '../../utils/MuiTable/customColumns';
import customRows from '../../utils/MuiTable/customRows';

export default {
  title: 'Components/MuiTable',
  component: MuiTableInfiniteLoading,
  argTypes: {
    columns: {
        description: 'Provide column data to render table',
    },
    rows: {
        description: 'Provide row data to render table'
    },
    checkboxSelection: {
      description: "Enable/disable checkbox selection for table"
    },  
    rowHeight: {
        description: "Provide row height for table"
    },
    loading: {
      description: "Set value based on API status"
    },
    onRowsScrollEnd: {
      description: "handle callback to Fetch API response and update rows"
    },
    onLinkClick: {
      description: "handle callback for cell data link"
    },
    onItemClick: {
      description: "handle callback for cell data context menu"
    },
    pinColumnLeft: {
      description: "List of column fields Array<string>"
    },
    pinColumnRight: {
      description: "List of column fields Array<string>"
    },
    applyFilter: {
      description: "Provide filter Array<{field: string, values: Array<string>, type: string}>"
    }
  }
} as ComponentMeta<typeof MuiTableInfiniteLoading>;

const Template: ComponentStory<typeof MuiTableInfiniteLoading> = (args) => <MuiTableInfiniteLoading {...args} />;

export const InfiniteLoading = Template.bind({});
InfiniteLoading.args = { 
  rowHeight: 72,
  checkboxSelection: false,  
  loading: false,
  columns: customColumns,
  rows: customRows,
  pinColumnLeft: ['col_1'],
  applyFilter: [
    {
      id: 1,
      columnId: "col_3",      
      columnName: "Color Label",
      children: [{id: 11, value: "Active"}],
      type: "label",  
    }
  ]
};
