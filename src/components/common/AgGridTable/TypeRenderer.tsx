import React from 'react';
import { ICellRendererParams } from "ag-grid-community";
import { 
  Type1, 
  Type2, 
  Type3,
  Type4,
  Type5,
  Type6,
  Type7,
  Type8
} from './CellTypes';

export const TypeRenderer = (props: ICellRendererParams, index: number) => {

    switch (props.colDef?.type) {
      case "type1":
      return <Type1 cellData={props.data?.type1Data} index={index}/>
      case "type2":
      return <Type2 cellData={props.data?.type2Data} index={index}/>
      case "type3":
      return <Type3 cellData={props.data?.type3Data} index={index}/>
      case "type4":
      return <Type4 cellData={props.data?.type4Data} index={index}/>
      case "type5":
      return <Type5 cellData={props.data?.type5Data} index={index}/>
      case "type6": 
      return <Type6 cellData={props.data?.type6Data} index={index}/>
      case "type7":
      return <Type7 cellData={props.data?.type7Data} index={index}/>
      case "type8": 
      return <Type8 cellData={props.data?.type8Data} index={index}/>
      default:
      break;
    }
  
  };