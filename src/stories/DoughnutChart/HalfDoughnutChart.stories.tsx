// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { HalfDoughnutChart } from '../../components/common/DoughnutChart/HalfDoughnutChart';

// export default {
//   title: 'Components/DoughnutChart',
//   component: HalfDoughnutChart,
//   argTypes: {
//     height: {
//       description: "Provide height for container"
//     },
//     width: {
//       description: "Provide width for container"
//     },
//     borderRadius: {
//       description: "Provide border-radius for container"
//     },
//     title: {
//       description: "Provide title"
//     },
//     currency: {
//       description: "Provide currency"
//     },
//     footer: {
//       description: "Provide footer"
//     },
//     data: {
//       description: "Provide list of info with label and price"
//     }
//   }
// } as ComponentMeta<typeof HalfDoughnutChart>;

// const Template: ComponentStory<typeof HalfDoughnutChart> = (args) => <HalfDoughnutChart {...args} />;

// /* Defualt args */

// export const Secondary = Template.bind({});
// Secondary.args = {
//   width: 250,
//   height: 220,
//   borderRadius: 2,
//   title: "Name",
//   currency: "$",
//   footer: "Bill Break-up",
//   data: [
//     {
//       label: "Subscription",
//       price: 450
//     },
//     {
//       label: "Service",
//       price: 350
//     },
//     {
//       label: "GST",
//       price: 130
//     }
//   ]
// };