import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioField } from "../components/common/radio";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Radio",
  component: RadioField,
  argTypes: {
    label: {
      description: "optional field to pass label",
    },
    size: {
      description: 'define size of the radio button'
    },
    isDisabled: {
      description: 'to make radio buttons as disabled field'
    },
    options: {
      description: 'input props to pass available options as radio button',
    },
    defaultSelectedId: {
      description: 'prop to pass default selected id for radio button to show as selected',
    },
    alignment: {
      description: 'alignment of the radio button (content)'
    },
    extraClasses: {
      description: 'to pass extra classes for label or radio button etc...'
    },
    onValueChange: {
      description: 'callback to listen radio click events'
    }
  }
} as ComponentMeta<typeof RadioField>;

const Template: ComponentStory<typeof RadioField> = (args) => (
  <RadioField {...args} onValueChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    // action(`onValueChange: on button selection event >>>`)(event)
    action(`onValueChange: on button selection ID >>>`)(event.target.value)
  }} />
);

export const custom = Template.bind({});
custom.args = {
  size: 'small',
  isDisabled: false,
  options: [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
    { id: 6, name: "Option 6" },
    { id: 7, name: "Option 7" },
  ],
  label: 'Label',
  defaultSelectedId: '',
  alignment: 'vertical',
  extraClasses: {
    primaryLabel: {
      color: 'black'
    },
    radio: {
      labelText: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '18px',
        textAlign: 'left'
      },
      borderColor: '#189B77',
      bgColor: '#189B77'
    }

  }
};

export const blueish = Template.bind({});
blueish.args = {
  size: 'small',
  isDisabled: false,
  options: [
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
    { id: 6, name: "Option 6" },
    { id: 7, name: "Option 7" },
  ],
  label: 'Label',
  defaultSelectedId: '',
  alignment: 'vertical',
  extraClasses: {
    primaryLabel: {
      color: 'black'
    },
    radio: {
      labelText: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '18px',
        textAlign: 'left'
      },
      borderColor: '#212224',
      bgColor: '#1A577E'
    }

  }
};