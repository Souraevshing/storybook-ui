import React, { useState } from 'react';
import { RowObj } from '../InfiniteLoading';
import { action } from '@storybook/addon-actions';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { IconType } from './IconTypes';
interface TypeData {
  index: number;
  rowData: any;
  cellData: any;  
  onLinkClick?: (row: RowObj) => void;
  onItemClick?: (row: RowObj, menuItem: {id: number, item: string}) => void;
}

export const LabelComponent = ({cellData, index}: TypeData) => (
    <div key={`label-${index}`} className="flex-col items-start"> 
      <div className='label-container' style={{flexDirection: cellData?.type === "single" ? "row" : "column", alignItems: cellData?.type === "single" ? "center" : "flex-start"}}>
        {
          cellData?.text && <div className='pr-2'>{cellData?.text?.value}</div>
        }  
        <div className={`label-container grid-label-wrapper-${cellData?.labelType === "primary" ? "1" : "2"} label-` + cellData?.label?.variant}>
          {cellData?.icon && IconType(cellData?.icon)}
          {cellData?.label?.value}
        </div>         
      </div> 
      {
        cellData?.subText && <div className={`mt-2 text-small text-${cellData?.subText?.variant}`} >{cellData?.subText?.value}</div>
      } 
    </div>
);

export const ImageComponent = ({cellData, index}: TypeData) => (
    <div key={`image-${index}`} style={{display: "flex"}}>
      {
        cellData?.imageList?.length
        &&
        cellData?.imageList?.map((image: any, n: number) => {
          return <img key={n} src={image} style={{height: "45px", width: "45px"}}/>
        })
      }
    </div>
);

export const TextComponent = ({cellData, index}: TypeData) => (
    <div key={`text-${index}`} className="flex-col items-start">
      <div className={`font-bold text-${cellData?.text.variant}`}>
        <div className="flex items-center">
          {
            cellData?.icon 
            && 
            <>
              {
                IconType(cellData?.icon)
              }
            </>           
          }
          <span className={`pl-${cellData?.icon ? "1" : "0"}`}>{cellData?.text?.value}</span>
          {
            cellData?.infoIcon
            &&
            <Tooltip title={cellData?.infoIcon?.title}>
              <IconButton style={{fontSize: 14, color: "black"}}>
                {IconType({value: "info", size: "small"})}
              </IconButton>
            </Tooltip>
          }          
        </div>        
      </div>
      <div className={`text-${cellData?.subText?.variant}`} >{cellData?.subText?.value}</div>
    </div>
);

export const LinkComponent = ({cellData, rowData, onLinkClick, index}: TypeData) => (
    <div key={`link-${index}`} className={`flex items-center link-wrapper text-${cellData?.link?.variant}`}
      onClick={() => { onLinkClick?.(rowData); action("Clicked Link")(rowData); }}>
      {cellData?.link?.value}
      {
        cellData?.infoIcon
        &&
        <Tooltip title={cellData?.infoIcon?.title}>
          <IconButton style={{fontSize: 14, color: "black"}}>
            {IconType({value: "info", size: "small"})}
          </IconButton>
        </Tooltip>
      } 
    </div>
);

export const ChipComponent = ({cellData, index}: TypeData) => (
    <div  key={`chip-${index}`} className="flex-col items-start">
      {
        cellData?.text
        &&
        <div className='font-bold'>
          {cellData?.text?.value}
        </div>
      }     
      {
        !(cellData?.label)
        &&
        <div>
          {
            cellData?.list?.length && cellData?.list?.slice(0, 2)?.map(
              (i: any, n: number) => 
              <span key={n}>
                  {i} 
                  {
                      cellData?.list?.slice(0, 2)?.length - 1 !== n
                      &&
                      <span>, </span>
                  }                    
              </span>
            )
          }
        </div>
      }  
      {   
        cellData?.list?.length 
        &&
        <div className="flex gap-2 mt-2">
          {
            (cellData?.label)
            &&
            <div className={`grid-label-wrapper-3 label-${cellData?.label?.variant}`}>
              {cellData?.list?.[0]}  
            </div>    
          }          
          {
            (cellData?.list?.length > (cellData?.label ? 1 : 2))
            &&
            <div className="grid-label-wrapper-4">                
              + { cellData?.list?.length - (cellData?.label ? 1 : 2)}
            </div>
          }
        </div>
      }
    </div>    
);

export const CardComponent = ({cellData, rowData, onLinkClick, index}: TypeData) => (
    <div key={`card-${index}`} className="flex gap-2 items-center">
        <img className={`avatar-wrapper ${cellData?.avatar?.isRounded && 'avatar-rounded'}`} src={cellData?.avatar?.src}/>
        <div className="flex-col items-start">
          <div className={`link-wrapper text-${cellData?.link?.variant}`}
            onClick={() => { onLinkClick?.(rowData); action("Clicked Link")(rowData); }}>
            {cellData?.link?.value}
          </div>
          {
            cellData?.text
            &&
            <div className="font-bold">{cellData?.text?.value}</div>
          }
          {
            cellData?.subText
            &&
            <div className={`text-${cellData?.subText?.variant}`} >{cellData?.subText?.value}</div>
          }
          
        </div>        
    </div>
);

export const IconComponent = ({cellData, rowData, onItemClick, index}: TypeData) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <div key={`icon-${index}`} style={{cursor: "pointer"}} 
      onClick={(event: React.MouseEvent<HTMLElement>) => { 
        setAnchorEl(event.currentTarget);
        setOpen(true);
      }}
    >
      { IconType(cellData?.icon, cellData) }
      {
        cellData?.isMenu
        ?
        <Menu
            key={"menu-items"}
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={  
              () => {
                setOpen(false);
                setAnchorEl(null);  
              }
            }
            MenuListProps={{
                "aria-labelledby": "basic-button",
            }}
            >
            {cellData?.menuItems.map((obj: any) => (
                <MenuItem      
                  key={obj?.id}          
                  onClick={
                    (event) => {
                      event.stopPropagation(); 
                      setOpen(false);
                      setAnchorEl(null);  
                      onItemClick?.(rowData, obj); 
                      action("Row")(rowData);
                      action("Selected Item")(obj);
                      }
                  }>
                {obj?.item}
                </MenuItem>
            ))}
        </Menu>
        :
        <></>
      }      
    </div>
  )
}