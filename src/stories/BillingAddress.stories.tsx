import React from "react";
import AddressBar from "../components/common/BillingAddress";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ProvienceData from "../utils/provience.json";
import CountryData from "../utils/country.json";

export default {
  title: "Components/BillingAddress",
  component: AddressBar,
  argTypes: {
    addressLinePlaceholder: {
      description: "Address line field placeholder",
    },
    addressLineLabel: {
      description: "Address line field label",
    },

    postalcodePlaceholder: {
      description: "Postal code field placeholder",
    },
    provincePlaceholder: {
      description: "Province of the button",
    },
    cityPlaceholder: {
      description: "City code field placeholder",
    },
    provinceLists: {
      description: "Province/State lists",
    },
    countriesLists: {
      description: "Countries lists",
    },
    onChange: {
      description: "Callback for onChange event",
    },
  },
} as ComponentMeta<typeof AddressBar>;

const Template: ComponentStory<typeof AddressBar> = (args) => (
  <AddressBar {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  addressLinePlaceholder: "Enter address",
  addressLineLabel: "Address line 1",
  postalcodePlaceholder: "Enter postal code",
  provincePlaceholder: "Enter province here",
  cityPlaceholder: "Enter City here",
  provinceLists: ProvienceData,
  countriesLists: CountryData,
  onChange: (val) => console.log(val.target.value),
};
