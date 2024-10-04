import { Tooltips } from "../components/common/Tooltips";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default {
  title: "Components/Tooltips",
  component: Tooltips,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    basicText: {
      control: "text",
      description: "Basic element",
    },
    tooltipText: {
      control: "text",
      description: "Tool tip message",
    },
    position: {
      description: "Tool tip position",
    },
    customClasses: {
      description: "custom classes for tooltip and label, here under tooltip, the value provided `Theme` is the interface provided by mui material styles.",
    },
    extraIcon: {
      description: "element to pass icon as per need, by default it's empty",
    },
    showToolTipOnIcon: {
      description: "a flag to show tooltip only while hovering on icon",
    },
  },
} as ComponentMeta<typeof Tooltips>;

const Template: ComponentStory<typeof Tooltips> = (args) => (
  <Tooltips {...args} />
);

const toolTipValues = {
  backgroundColor: "#00000080",
  opacity: 0.2,
  color: "white",
  maxWidth: 300,
  fontSize: 10,
  backdropFilter: "blur(30px)",
}

export const tooltipTop = Template.bind({});
tooltipTop.args = {
  basicText: "Hover me",
  tooltipText: "Tool tip message",
  position: "top",
  customClasses: {
    label: "",
    tooltip: toolTipValues,
  },
  extraIcon: <InfoOutlinedIcon />,
  showToolTipOnIcon: false,
};

export const tooltipRight = Template.bind({});
tooltipRight.args = {
  basicText: "Hover me",
  tooltipText: "Tool tip message",
  position: "right",
  customClasses: {
    label: "",
    tooltip: toolTipValues,
  },
  extraIcon: <InfoOutlinedIcon />,
  showToolTipOnIcon: false,
};

export const tooltipBottom = Template.bind({});
tooltipBottom.args = {
  basicText: "Hover me",
  tooltipText: "Tool tip message",
  position: "bottom",
  customClasses: {
    label: "",
    tooltip: toolTipValues,
  },
  extraIcon: <InfoOutlinedIcon />,
  showToolTipOnIcon: false,
};

export const tooltipLeft = Template.bind({});
tooltipLeft.args = {
  basicText: "Hover me",
  tooltipText: "Tool tip message",
  position: "left",
  customClasses: {
    label: "",
    tooltip: toolTipValues,
  },
  extraIcon: <InfoOutlinedIcon />,
  showToolTipOnIcon: false,
};
