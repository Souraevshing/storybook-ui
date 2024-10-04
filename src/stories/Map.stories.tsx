import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MapComponent } from "../components/common/Map/Map";

export default {
  title: "Components/Map",
  component: MapComponent,
  argTypes: {
    height: {
      description: "Provide height for container"
    },
    width: {
      description: "Provide width for container"
    },
    borderRadius: {
      description: "Provide border-radius for container"
    },
    zoom: {
      description: "Toggle zoom controller"
    },
    center: {
      description: "Provide default latlng"
    },
    pin: {
      description: "Choose marker"
    },
    locations: {
      description: "Provide list of locations with id, label and latlng"
    }
  }
} as ComponentMeta<typeof MapComponent>;

const Template: ComponentStory<typeof MapComponent> = (args) => (<MapComponent {...args}/>);

export const Default = Template.bind({});
Default.args = {
  height: 250,
  width: 600,
  borderRadius: 2,
  zoom: false,
  center: { lat: 41.881832, lng: -87.623177 },
  pin: "primary",
  locations: [
    {
      id: 1,
      label: "Chicago, Illinois",
      position: { lat: 41.881832, lng: -87.623177 }
    },
    {
      id: 2,
      label: "Denver, Colorado",
      position: { lat: 39.739235, lng: -104.99025 }
    },
    {
      id: 3,
      label: "Los Angeles, California",
      position: { lat: 34.052235, lng: -118.243683 }
    },
    {
      id: 4,
      label: "New York, New York",
      position: { lat: 40.712776, lng: -74.005974 }
    }
  ]
};