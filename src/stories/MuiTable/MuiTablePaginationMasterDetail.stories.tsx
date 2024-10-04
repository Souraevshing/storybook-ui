import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MuiTablePaginationMasterDetail } from "../../components/common/MuiTable/PaginationMasterDetail";
import customColumns from '../../utils/MuiTable/customColumns';
import customRowDetails from '../../utils/MuiTable/customRowDetails';

export default {
  title: 'Components/MuiTable',
  component: MuiTablePaginationMasterDetail,
  argTypes: {
    columns: {
        description: 'Provide column data to render table',
    },
    rows: {
        description: 'Provide row data to render table'
    },
    page: {
      description: "Provide active page no. for table",
    },
    pageSize: {
      description: "Provide page size for table",
    },
    checkboxSelection: {
      description: "Enable/Disable checkbox selction",
    },
    rowHeight: {
        description: "Provide row height for table"
    },
    pinColumnLeft: {
      description: "List of column fields Array<string>"
    },
    pinColumnRight: {
      description: "List of column fields Array<string>"
    },
    applyFilter: {
      description: "Provide filter Array<{field: string, values: Array<string>, type: string}>"
    },
    onLinkClick: {
      description: "handle callback for cell data link"
    },
    onItemClick: {
      description: "handle callback for cell data context menu"
    },
  }
} as ComponentMeta<typeof MuiTablePaginationMasterDetail>;

const Template: ComponentStory<typeof MuiTablePaginationMasterDetail> = (args) => <MuiTablePaginationMasterDetail {...args} />;

export const PaginationMasterDetail = Template.bind({});
PaginationMasterDetail.args = { 
  rowHeight: 72,
  checkboxSelection: false,  
  page: 1,
  pageSize: 5,
  columns: customColumns,
  rows: customRowDetails,
  pinColumnLeft: ['col_1'],  
  applyFilter: [
    {
      id: 1,
      columnId: "col_5",
      columnName: "Text + Subtext",
      type: "text",
      children: [{id: 11, value: "Shirt"}]      
    },
    {
      id: 2,
      columnId: "col_6",
      columnName: "Text",
      type: "text",
      children: [
        { id: 12, value: "thomastuchel@nike.com" },
        { id: 13, value: "brenden@nike.com" }
      ]      
    }
  ]
};
