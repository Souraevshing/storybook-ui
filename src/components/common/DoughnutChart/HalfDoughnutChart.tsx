// import React from 'react';
// import Chart from "react-apexcharts";
// interface DataSet {
//   label: string;
//   price: number;
// }

// interface DonutProps {
//   width: number;
//   height: number;
//   borderRadius: number;
//   title: string;
//   currency: string;
//   footer: string;
//   data: Array<DataSet>;
// }

// export const HalfDoughnutChart = ({
//   width = 250,
//   height = 220,
//   borderRadius = 2,
//   title,
//   currency,
//   footer,
//   data
// }: DonutProps) => {

//     const doughnutData = {
//         series: data?.map(i => i.price),  
//         options: {
//           states: {
//             active: {
//               filter: {
//                 type: 'none',
//                 value: 0
//               }
//             },
//             hover: {
//               filter: {
//                   type: 'none',
//                   value: 0
//               }
//             }
//           },
//           colors: ['#1B587F', '#6c99b6', '#C8D8E5'],
//           labels: data?.map(i => (i.label + " " + currency + i.price)),
//           chart: {
//             id: 'chartContainer'
//           },
//           plotOptions: {
//             pie: {
//               startAngle: -90,
//               endAngle: 90,
//               offsetY: 10,
//               donut: {
//                 size: "70px"
//               }
//             }
//           },
//           grid: {
//             padding: {
//               bottom: -80
//             }
//           },
//           dataLabels: {
//             enabled: false
//           },
//           legend: {
//             show: false
//           },
//           tooltip: {
//             custom: function({seriesIndex, w}: any) {              
//               var label = w.config.labels[seriesIndex];
//               return label;
//             },
//             marker: {
//               show: true,
//             },
//           }
//         }
//     }

//     return (    
//         (typeof window !== 'undefined') 
//         && 
//         <div id="chartContainer" className="half-donutchart-container" style={{width: width, height: height, borderRadius: borderRadius}} >
//             <p className="half-donutchart-title">{data?.length && title}</p>
//             <p className="half-donutchart-currency"><span style={{color: "#B0BAD3", paddingRight: 5}}>{data?.length && currency}</span> 
//               {data?.length && data?.map((i: any) => i.price).reduce((a, b) => a + b, 0)}
//             </p>
//             {
//               data?.length
//               ?      
//               <Chart
//                   style={{
//                     marginLeft: -17.5, 
//                     marginTop: 5}}
//                   options={doughnutData.options}
//                   series={doughnutData.series}
//                   type="donut"
//                   height={width ? width : 250}
//                   width={width ? width : 250}
//               />
//               :
//               <div style={{height: "inherit", color: "red", fontSize: 12, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "inherit"}}>
//                 Please load data!
//               </div>
//             }
//             <footer className="half-donutchart-footer">{data?.length && footer}</footer>
//         </div>
//     )  
// }