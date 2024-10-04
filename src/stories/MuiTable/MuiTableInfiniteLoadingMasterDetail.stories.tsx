import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MuiTableInfiniteLoadingMasterDetail } from "../../components/common/MuiTable/InfiniteLoadingMasterDetail";
import customColumns from '../../utils/MuiTable/customColumns';
import customRowDetails from '../../utils/MuiTable/customRowDetails';

export default {
  title: 'Components/MuiTable',
  component: MuiTableInfiniteLoadingMasterDetail,
  argTypes: {
    columns: {
        description: 'Provide column data to render table',
    },
    rows: {
        description: 'Provide row data to render table'
    },
    infiniteRows: {
      description: "Provide infinite rows to render table"
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
} as ComponentMeta<typeof MuiTableInfiniteLoadingMasterDetail>;

const Template: ComponentStory<typeof MuiTableInfiniteLoadingMasterDetail> = (args) => <MuiTableInfiniteLoadingMasterDetail {...args} />;

export const InfiniteLoadingMasterDetail = Template.bind({});
InfiniteLoadingMasterDetail.args = { 
  rowHeight: 72,
  checkboxSelection: false,  
  loading: false,
  columns: customColumns,
  rows: customRowDetails,
  pinColumnLeft: ['col_1'],
  applyFilter: []
};
