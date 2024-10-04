import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MuiTablePagination } from "../../components/common/MuiTable/Pagination";
import customColumns from '../../utils/MuiTable/customColumns';
import customRows from '../../utils/MuiTable/customRows';

export default {
  title: 'Components/MuiTable',
  component: MuiTablePagination,
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
    },  onLinkClick: {
      description: "handle callback for cell data link"
    },
    onItemClick: {
      description: "handle callback for cell data context menu"
    },
  }
} as ComponentMeta<typeof MuiTablePagination>;

const Template: ComponentStory<typeof MuiTablePagination> = (args) => <MuiTablePagination {...args} />;

export const Pagination = Template.bind({});
Pagination.args = { 
  rowHeight: 72,
  checkboxSelection: false,  
  page: 1,
  pageSize: 5,
  columns: customColumns,
  rows: customRows,
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
