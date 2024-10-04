// import React from 'react';
// import { AgGridReact } from 'ag-grid-react';

// import "ag-grid-community/dist/styles/ag-grid.scss";

// import { TypeRenderer } from './TypeRenderer';

// type TableProps = {
//     headerData: Array<object>;
//     tableData: Array<object>;
//     rowHeight?: number;
// }

// export const AgGridTable = ({
//     headerData,
//     tableData,
//     rowHeight = 52,
//     ...props
// }: TableProps) => {
//     const newHeaderData = headerData.map((obj, n) => 
//       { 
//         return {...obj, cellRenderer: TypeRenderer, headerClass: "header-col-" + (n+1).toString() } 
//       });    
   
//     const rowStyle = { 
//       'height': rowHeight?.toString() + "px", 
//       'lineHeight': rowHeight?.toString() + "px"
//     };

//   return (
//     <AgGridReact
//         className="ag-theme-material"
//         rowData={tableData}
//         columnDefs={newHeaderData}
//         rowStyle={rowStyle}
//         rowClass="custom-row"
//         rowHeight={rowHeight}
//         {...props}
//     ></AgGridReact>
//   );
// };