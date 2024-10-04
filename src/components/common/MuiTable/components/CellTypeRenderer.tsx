import { GridRenderCellParams } from '@mui/x-data-grid-pro';
import React from 'react';
import { RowObj } from '../InfiniteLoading';
import { 
  LabelComponent, 
  ImageComponent,
  TextComponent,
  LinkComponent,
  ChipComponent,
  CardComponent,
  IconComponent
} from './CellTypes';

export const CellTypeRenderer = (params: GridRenderCellParams, index: number, onLinkClick?: (row: RowObj) => void, onItemClick?: (row: RowObj, menuItem: {id: number, item: string}) => void) => {
    switch (params.colDef.type) {
      case "label":
        return <LabelComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} />
      case "image":
        return <ImageComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} />
      case "text":
        return <TextComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} />
      case "link":
        return <LinkComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} onLinkClick={onLinkClick}/>
      case "chip":
        return <ChipComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} />
      case "card":
        return <CardComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} onLinkClick={onLinkClick}/>
      case "icon":
        return <IconComponent index={index} rowData={params?.row} cellData={params?.row[params.field]} onItemClick={onItemClick}/>
      default:
        break;
    }  
};
