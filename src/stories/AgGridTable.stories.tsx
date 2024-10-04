// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { AgGridTable } from '../components/common/AgGridTable/AgGridTable';

// export default {
//   title: 'Components/AgGridTable',
//   component: AgGridTable,
//   argTypes: {
//     headerData: {
//         description: 'Provide column data to render table',
//     },
//     tableData: {
//         description: 'Provide table data to render table'
//     },
//     rowHeight: {
//         description: "Provide row height for table"
//     }
//   }
// } as ComponentMeta<typeof AgGridTable>;

// const Template: ComponentStory<typeof AgGridTable> = (args) => <AgGridTable {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   headerData: [
//     { headerName: "Text + Label", field: 'type1Data', minWidth: 70, type: "type1" },
//     { headerName: "Text + Subtext", field: 'type3Data', minWidth: 150, type: "type3"},
//     { headerName: "List", field: 'type4Data', minWidth: 150, type: "type4" },
//     { headerName: "Text + Chipcount", field: 'type5Data', minWidth: 150, type: "type5" },
//     { headerName: "Link", field: 'type2Data', minWidth: 250, type: "type2" },
//     { headerName: "Image + Text", field: 'type6Data', minWidth: 250, type: "type6" },
//     { headerName: "Text", field: 'type8Data', minWidth: 250, type: "type8" },
//     { headerName: "Color label", field: 'type7Data', minWidth: 100, type: "type7" }
//   ],
//   tableData: [
//     {
//       id: 1,
//       type1Data: {
//           text: {
//             value: "01"
//           },
//           label: {
//             value: "NEW"
//           }
//       },
//       type2Data: {
//         link: {
//           label: "Chain ABC",
//           value: ""
//         }        
//       },
//       type3Data: {
//         text: {
//           value: "T-Shirt"
//         },
//         subText: {
//           value: "Polo"
//         }
//       },
//       type4Data: [
//         "Fabric"
//       ],
//       type5Data: [
//         "Supplier XYZ"
//       ], 
//       type6Data: {
//         image: {
//           value: "https://www.pngitem.com/pimgs/m/22-224351_avatar-user-icon-hd-png-download.png"
//         },
//         text: {
//           value: "Thomas Tuchel"
//         }
//       },
//       type7Data: {
//         label: {
//           value: "Pending",
//           variant: "cell-variant-2"
//         }
//       },
//       type8Data: {
//         text: {
//           value: "thomastuchel@nike.com"
//         }
//       }
//     },
//     {
//       id: 2,
//       type1Data: {
//         text: {
//           value: "02"
//         },
//       },
//       type2Data: {
//         link: {
//           label: "Chain ABC",
//           value: ""
//         }        
//       },
//       type3Data: {
//         text: {
//           value: "T-Shirt"
//         },
//         subText: {
//           value: "V-Neck"
//         }
//       },
//       type4Data: [
//         "Fabric",
//         "Button"
//       ],
//       type5Data: [
//         "Supplier XYZ",
//         "Supplier ABX",
//         "Supplier XYZ",
//         "Supplier ABX"
//       ],
//       type6Data: {
//         image: {
//           value: "https://www.pngitem.com/pimgs/m/22-224351_avatar-user-icon-hd-png-download.png"
//         },
//         text: {
//           value: "Thomas Tuchel"
//         }
//       },
//       type7Data: {
//         label: {
//           value: "Active",
//           variant: "cell-variant-1"
//         }
//       },
//       type8Data: {
//         text: {
//           value: "thomastuchel@nike.com"
//         }
//       }
//     },
//     {
//       id: 3,
//       type1Data: {
//         text: {
//           value: "03"
//         },
//           label: {
//             value: "NEW"
//           }
//       },
//       type2Data: {
//         link: {
//           label: "Chain ABC",
//           value: ""
//         }        
//       },
//       type3Data: {
//         text: {
//           value: "T-Shirt"
//         },
//         subText: {
//           value: "V-Neck"
//         }
//       },
//       type4Data: [
//         "Fabric",
//         "Button"
//       ],
//       type5Data: [
//         "Supplier XYZ",
//         "Supplier ABX"
//       ],
//       type6Data: {
//         image: {
//           value: "https://www.pngitem.com/pimgs/m/22-224351_avatar-user-icon-hd-png-download.png"
//         },
//         text: {
//           value: "Thomas Tuchel"
//         }
//       },
//       type7Data: {
//         label: {
//           value: "Inactive",
//           variant: "cell-variant-3"
//         }
//       },
//       type8Data: {
//         text: {
//           value: "thomastuchel@nike.com"
//         }
//       }
//     },
//     {
//       id: 4,
//       type1Data: {
//         text: {
//           value: "04"
//         },
//       },
//       type2Data: {
//         link: {
//           label: "Chain ABC",
//           value: ""
//         }        
//       },
//       type3Data: {
//         text: {
//           value: "T-Shirt"
//         },
//         subText: {
//           value: "V-Neck"
//         }
//       },
//       type4Data: [
//         "Fabric",
//         "Zipper"
//       ],
//       type5Data: [
//         "Supplier XYZ",
//         "Supplier ABX",
//         "Supplier XYZ"
//       ],
//       type6Data: {
//         image: {
//           value: "https://www.pngitem.com/pimgs/m/22-224351_avatar-user-icon-hd-png-download.png"
//         },
//         text: {
//           value: "Thomas Tuchel"
//         }
//       },
//       type7Data: {
//         label: {
//           value: "Inactive",
//           variant: "cell-variant-3"
//         }
//       },
//       type8Data: {
//         text: {
//           value: "thomastuchel@nike.com"
//         }
//       }
//     },
//     {
//       id: 5,
//       type1Data: {
//         text: {
//           value: "05"
//         },
//           label: {
//             value: "NEW"
//           }
//       },
//       type2Data: {
//         link: {
//           label: "Chain ABC",
//           value: ""
//         }        
//       },
//       type3Data: {
//         text: {
//           value: "T-Shirt"
//         },
//         subText: {
//           value: "Polo"
//         }
//       },
//       type4Data: [
//         "Fabric"
//       ],
//       type5Data: [
//         "Supplier XYZ"
//       ],
//       type6Data: {
//         image: {
//           value: "https://www.pngitem.com/pimgs/m/22-224351_avatar-user-icon-hd-png-download.png"
//         },
//         text: {
//           value: "Thomas Tuchel"
//         }
//       },
//       type7Data: {
//         label: {
//           value: "Inactive",
//           variant: "cell-variant-3"
//         }
//       },
//       type8Data: {
//         text: {
//           value: "thomastuchel@nike.com"
//         }
//       }
//     }
//   ]
// };