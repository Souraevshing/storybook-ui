import React, { useEffect, useState } from "react";
import { DataGridPro, DataGridProProps, GridColDef, GridRowId } from "@mui/x-data-grid-pro";
import { CellTypeRenderer } from "./CellTypeRenderer";
import { LicenseInfo } from '@mui/x-license-pro';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGridMainStyles } from './Styles'
import { LinearProgress } from "@mui/material";

const licenseKey = "cf4abf8001fab48ce94cbeadb8cef2c5Tz00Nzk3NSxFPTE2OTA0NTQ0OTU4NDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=";
LicenseInfo.setLicenseKey(licenseKey);


interface ColumnObj {
  field: string;
  headerName: string;
  width: number;
  renderCell?: any;
}
interface RowObj {  
  id: number;
  [key: string]: any;
}
interface MuiTableProps {
  columns: ColumnObj[]; 
  rows: RowObj[];
  infiniteRows?: RowObj[];
  page: number;
  pageSize: number;
  rowsPerPageOptions: number[];
  checkboxSelection: boolean;
  rowHeight?: number;
  pagination: boolean;
}

export const MuiTable = ({
  columns,
  rows,
  infiniteRows = [],
  page,
  pageSize,
  rowsPerPageOptions,
  checkboxSelection,
  rowHeight = 52,
  pagination = false
}: MuiTableProps) => {
  const [newPage, setNewPage] = React.useState(page);
  const [newPageSize, setNewPageSize] = useState<number>(pageSize);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadedRows, setLoadedRows] = useState<any>([]);
  const mounted = React.useRef(true);
  const newColumns: GridColDef[] = columns.map((obj: any) => 
  { 
    return {...obj, sortable: false, renderCell: CellTypeRenderer } 
  });   

  const [detailPanelExpandedRowIds, setDetailPanelExpandedRowIds] = useState<GridRowId[]>([]);

  // const handleDetailPanelExpandedRowIdsChange = useCallback(
  //   (newIds: GridRowId[]) => {
  //     setDetailPanelExpandedRowIds(newIds);
  //   },
  //   [],
  // );

  const loadServerRows = async (newRowLength: number) => {
    setLoading(true);
    const newRows = await infiniteRows;

    if (mounted.current) {
      setLoading(false);
      setLoadedRows(loadedRows.concat(newRows));
    }
  };

  const handleOnRowsScrollEnd: DataGridProProps['onRowsScrollEnd'] = (params) => {
    // if (loadedRows.length <= MAX_ROW_LENGTH) {
    //   loadServerRows(params.viewportPageSize);
    // }

    if (infiniteRows.length) {
      loadServerRows(params.viewportPageSize);
    }
  };

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      {
        (typeof window !== 'undefined') &&      
      <DataGridPro
        columns={newColumns}
        rows={!pagination ? [...rows, ...loadedRows] : rows}    
        
        pagination={pagination}
        page={pagination ? newPage : 0}
        pageSize={pagination ? newPageSize : 0}
        paginationMode="server"
        onPageChange={pagination ? (newPage) => setNewPage(newPage) : () => {}}
        onPageSizeChange={pagination ? (newPageSize) => setNewPageSize(newPageSize) : () => {}}
        rowsPerPageOptions={pagination ? rowsPerPageOptions : []}
        checkboxSelection={checkboxSelection}

        /* Checkbox selection */
        /* START */
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = rows.filter((row) =>
            selectedIDs.has(row.id),
          );
          setSelectedRows(selectedRows);
        }}
        /* END */
        disableColumnMenu={true}
        getRowHeight={() => (rowHeight > 0) ? rowHeight : 52}         

        /* Master Detail */
         /* START */
        // getDetailPanelContent={({ row }: any) => (
        //   <div style={{display: "flex", justifyContent: "flex-start", height: 240}}>
        //     <div style={{height: "inherit", borderLeft: "1px solid #D9D9D9", marginRight: 25, marginLeft: 25 }} />
        //     <div style={{ height: "inherit", width: "100%", padding: 10, boxSizing: "border-box", background: "#F8F8F8", borderRadius: 4 }}>            
        //       <DataGridPro
        //         density="compact"
        //         columns={row.details.columns}
        //         rows={row.details.rows}
        //         hideFooter
        //         disableColumnMenu 
        //         getRowClassName={() => `MuiDataGridDetailCustomRow`}
        //         sx={DataGridMiniStyles}
        //       />
        //     </div>
        //   </div>         
        // )}
        // getDetailPanelHeight={() => 'auto'}  
        // detailPanelExpandedRowIds={detailPanelExpandedRowIds}
        // onDetailPanelExpandedRowIdsChange={handleDetailPanelExpandedRowIdsChange}
        /* END */

        // rowThreshold={0}      
        
        getRowClassName={(params) => detailPanelExpandedRowIds?.includes(params.row.id) ? `MuiDataGridCustomRow2` : `MuiDataGridCustomRow1`}
        sx={DataGridMainStyles}
        hideFooter={true}
        hideFooterRowCount={pagination}
        hideFooterPagination={!pagination}
        hideFooterSelectedRowCount={true}
        
        /* Infinite loading */
        /* START */
        loading={loading}
        onRowsScrollEnd={!pagination ? handleOnRowsScrollEnd : () => {}}
        /* END */

        components={{
          DetailPanelExpandIcon: ExpandMoreIcon,
          LoadingOverlay: LinearProgress
        }}
      />
      }
    </div>
  );
}