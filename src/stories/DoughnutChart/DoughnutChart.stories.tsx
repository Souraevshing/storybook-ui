import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DoughnutChart } from '../../components/common/DoughnutChart/DoughnutChart';

export default {
  title: "Components/DoughnutChart",
  component: DoughnutChart,
  argTypes: {
    title: {
      description: "Provide title for the Douhnut chart",
    },
    borderRadius: {
      description: "Provide borderRadius for container",
    },
    background: {
      description: "Provide background for container",
    },
    data: {
      description: "Provide data for the Douhnut chart",
    },
  },
} as ComponentMeta<typeof DoughnutChart>;

const Template: ComponentStory<typeof DoughnutChart> = (args) => (
  <DoughnutChart {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Green Story",
  borderRadius: 4,
  background: "#F8F8F8",
  data: [
    {
      key: 1,
      label: "Item name 1",
      count: 1300,
      keyName: "Products",
    },
    {
      key: 2,
      label: "Item name 2",
      count: 1400,
      keyName: "Products",
    },
    {
      key: 3,
      label: "Item name 3",
      count: 800,
      keyName: "Products",
    },
  ],
};
