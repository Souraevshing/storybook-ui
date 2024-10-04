import React from 'react';

export const Type1 = ({cellData, index}) => {
    return (
      <span key={`type-${index+1}`}>       
        <span style={{paddingLeft: "14px", paddingRight: "10px"}}>{cellData?.text?.value}</span>
        {
          cellData?.label
          &&
          <span style={{ backgroundColor: "#FFABAB", borderRadius: "2px", fontSize: 10, padding: 5, fontWeight: 'bold' }}>
            {cellData?.label?.value}
          </span>  
        }           
      </span>
    )
}

export const Type2 = ({cellData, index}) => {
  return (
    <span key={`type-${index+1}`} style={{color: "#349EFF", fontWeight: 400, textDecoration: "underline", cursor: "pointer"}}>
      {cellData?.link?.label}
    </span>
  )
}

export const Type3 = ({cellData, index}) => {
  return(
    <span key={`type-${index+1}`}>
        <span>{cellData?.text?.value}</span>
        &nbsp;
        |     
        &nbsp;
        <span style={{color: "#838383", fontWeight: 400}}>{cellData?.subText?.value}</span>
    </span>
  )
}

export const Type4 = ({cellData, index}) => {
  return(
      <span key={`type-${index+1}`}>
          {   cellData?.length
              &&
              cellData?.map((i, n) => 
                  <span>
                      {i} 
                      {
                          cellData?.length - 1 !== n
                          &&
                          <span>, </span>
                      }                    
                  </span>
              )
          }
      </span>
  )
}

export const Type5 = ({cellData, index}) => {
  return(
    <span key={`type-${index+1}`}>
          {   
            cellData?.length
              &&
            <span>
              {cellData[0]}            
              {
                (cellData?.length > 1) 
                &&
                <>
                  <span>
                    &nbsp;
                    |
                    &nbsp; 
                  </span>
                  <span style={{backgroundColor: "#E9E9E9", borderRadius: "17px", padding: "5px 12px 5px"}}>                
                    + { cellData?.length - 1}
                  </span>
                </>
              }
            </span>
          }
    </span>
  )
}

export const Type6 = ({cellData, index}) => {
  return(
    <span key={`type-${index+1}`} style={{display: "flex", alignItems: "center"}}>
        <span style={{marginRight: "10px"}}>
          <img src={cellData?.image?.value} style={{height: "36px", width: "36px", borderRadius: "50%"}}/>
        </span>      
        <span style={{fontWeight: 600}}>{cellData?.text?.value}</span>
      </span>
  )
}

export const Type7 = ({cellData, index}) => {
  return (
    <span key={`type-${index+1}`}>
        <span className={ 'ag-grid-status-cell ' + cellData?.label?.variant} >{cellData?.label?.value}</span>
    </span>
  )
}

export const Type8 = ({cellData, index}) => {
  return (
    <span key={`type-${index+1}`}>
        <span style={{color: "#0077C3", fontWeight: 400, fontSize: "12px", lineHeight: "18px"}}>{cellData?.text?.value}</span>
    </span>
  )
}