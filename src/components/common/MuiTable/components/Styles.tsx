
export const DataGridMainStyles = {
    rowGap: 5,
    border: 0,
    fontSize: "12px",
    color: "#212224",
    '& .MuiDataGrid-columnSeparator--sideRight': {
      display: "none"
    },
    '& .MuiDataGrid-columnHeaders': {
      background: "#EDF2F5",
      minHeight: "30px !important",
      maxHeight: "30px !important",
      lineHeight: "30px !important",
      borderBottom: 0,
      borderRadius: "4px",
      marginBottom: "20px"
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 0
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: 0
    },
    // To Hide detail panel icon column
    
    // '& .MuiDataGrid-columnHeader:first-child': {
    //   display: "none"
    // },
    // '& .MuiDataGrid-cell:first-child': {
    //   display: "none"
    // }
  }
  
  export const DataGridMiniStyles = {
    flex: 1,
    border: 0,
    fontSize: "12px",
    color: "#212224",
    '& .MuiDataGrid-columnSeparator--sideRight': {
      display: "none"
    },
    '& .MuiDataGrid-columnHeaders': {
      background: "none",
      minHeight: "30px !important",
      maxHeight: "30px !important",
      lineHeight: "30px !important",
      borderBottom: 0,
      borderRadius: "4px",
      marginBottom: "20px"
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 0
    }               
  }