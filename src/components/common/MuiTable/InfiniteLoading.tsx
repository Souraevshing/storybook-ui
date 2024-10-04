import React, { useState } from "react";
import { DataGridPro, GridColDef, GridColumnHeaderParams, GridRenderCellParams } from "@mui/x-data-grid-pro";
import { CellTypeRenderer } from "./components/CellTypeRenderer";
import { LicenseInfo } from '@mui/x-license-pro';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGridMainStyles } from './components/Styles'
import { IconButton, LinearProgress, Tooltip } from "@mui/material";
import { action } from "@storybook/addon-actions";
import { InfoOutlinedIcons } from "../Icons/InfoIcon";
import { Card, Chip, Icon, Image, Label, Link, Text } from "./components/CellModal";
import _ from 'lodash';

const licenseKey = "cf4abf8001fab48ce94cbeadb8cef2c5Tz00Nzk3NSxFPTE2OTA0NTQ0OTU4NDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=";
LicenseInfo.setLicenseKey(licenseKey);
export interface ColumnObj {  
  headerName: string; 
  field: string;
  type: "label" | "image" | "text" | "link" | "chip" | "card" | "icon";
  flex?: number;
  width?: number; 
  description?: string;
}
export interface RowObj {
  id: number;
  [key: string]: Card | Chip | Icon | Image | Label | Link | Text | number | string;
}
export interface ChildFilterObj {
  id: number;
  value: string;
}

export interface FilterObj {  
  id: number;
  columnId: string;
  columnName: string;
  type: "text" | "subText" | "label" | "link";
  children: ChildFilterObj[];  
}

interface MuiTableProps {
  columns: ColumnObj[]; 
  rows: RowObj[];
  checkboxSelection: boolean;
  rowHeight?: number;
  loading: boolean;
  align?: "left" | "center" | "right";
  onRowsScrollEnd: () => void;
  pinColumnLeft?: string[];
  pinColumnRight?: string[];
  applyFilter?: FilterObj[];  
  onLinkClick?: (row: RowObj) => void;
  onItemClick?: (row: RowObj, menuItem: {id: number, item: string}) => void;
}

export const MuiTableInfiniteLoading = ({
  columns,
  rows,
  checkboxSelection,
  rowHeight = 52,
  loading = false,
  align = "left",
  onRowsScrollEnd,  
  pinColumnLeft = [],
  pinColumnRight = [],
  applyFilter,
  onLinkClick,
  onItemClick,
  ...props
}: MuiTableProps) => {
  const [selectedRows, setSelectedRows] = useState<any>([]);

  let filterRows: any = [];

  var newRowFiltered = (column: string, value: string, type: "text" | "subText" | "label" | "link") => _.filter(rows, (row: any, i: number) => {    
    return row?.[column]?.[type]?.value === value;
  });

  applyFilter?.map((item: FilterObj) => {
    return item?.children?.map((child: ChildFilterObj) => {
      filterRows.push(...newRowFiltered(item?.columnId, child?.value, item?.type))
    })
  })

  const uniqueIds:any = [];

  const uniqueRows = filterRows.filter((element: any) => {
    const isDuplicate = uniqueIds.includes(element.id);
  
    if (!isDuplicate) {
      uniqueIds.push(element.id);  
      return true;
    }
  
    return false;
  });

  const newColumns: GridColDef[] = columns.map((obj: any, index: number) => 
  { 
    return {
      ...obj, 
      // hide: applyFilter?.length ? !(applyFilter?.map((i: FilterObj) => i.columnId)?.includes(obj?.field)) : false,
      align: align, 
      headerAlign: align, 
      renderCell: (params: GridRenderCellParams, index: number) => CellTypeRenderer(params, index, onLinkClick, onItemClick), 
      sortComparator: (v1, v2) => 
      (v1?.subText && v2?.text) ? v1?.subText?.value.localeCompare(v2?.subText?.value)
      : 
      (v1?.text && v2?.text) ? v1?.text?.value.localeCompare(v2?.text?.value)
      : 
      (v1?.label && v2?.label) ? v1?.label?.value.localeCompare(v2?.label?.value)
      : 
      (v1?.link && v2?.link) ? v1?.link?.value.localeCompare(v2?.link?.value)
      : 
      null,
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong className={`flex align-item-center`}>
            {params.colDef.headerName}
            {
              params.colDef.description
              &&
              <Tooltip title={params.colDef.description}>
                <IconButton style={{fontSize: 14, color: "black"}}>
                  <InfoOutlinedIcons
                    size="inherit"
                    color="inherit"
                  />
                </IconButton>
              </Tooltip>
            }   
        </strong>       
      )
    } 
  });

  return (
    <div style={{ height: "100vh" }}>
      {
        (typeof window !== 'undefined') &&     
      <DataGridPro
        columns={newColumns}
        rows={applyFilter?.length ? uniqueRows : rows} 
        pinnedColumns={{left: pinColumnLeft, right: pinColumnRight}}
        checkboxSelection={checkboxSelection}
        /* Checkbox selection */
        /* START */
        onSelectionModelChange={   
          (ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = rows.filter((row) =>
              selectedIDs.has(row.id),
            );
            setSelectedRows(selectedRows);
            checkboxSelection && action("Selected Rows")(selectedRows);
          }
        } 
        /* END */
       
        getRowHeight={() => (rowHeight > 0) ? rowHeight : 52}
        // rowThreshold={0}              
        getRowClassName={() => `MuiDataGridCustomRow1`}

        /* Infinite loading */
        /* START */
        loading={loading}
        onRowsScrollEnd={onRowsScrollEnd}
        /* END */
        
        components={{
          DetailPanelExpandIcon: ExpandMoreIcon,
          LoadingOverlay: LinearProgress,
          // Toolbar: GridToolbar
        }}
        sx={DataGridMainStyles}
        disableColumnMenu
        hideFooter
        hideFooterRowCount
        hideFooterSelectedRowCount    
        {...props}
      />
      }
    </div>
  );
}