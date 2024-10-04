import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchIcon from "@mui/icons-material/Search";
import { TextFields } from "../components/common/TextField";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/TextFields",
  component: TextFields,
  argTypes: {
    labelProps: {
      description: "optional field to pass extra label props",
    },
    labelText: {
      description: "to pass label text",
    },
    inputGroupIcon: {
      description: "to pass icon at the end of input (ie. search bar)",
    },
    isDisabled: {
      description: "to make field disabled",
    },
    isInvalid: {
      description: "to make field disabled",
    },
    defaultValue: {
      description: "to pass any default value",
    },
    placeholder: {
      description: "to pass placeholder",
    },
    className: {
      description: 'pass class name as props for label & input field'
    }
  }
} as ComponentMeta<typeof TextFields>;

const Template: ComponentStory<typeof TextFields> = (args) => (
  <TextFields  {...args}
    onIconClick={(searchedField) => {
      action('Search icon clicked... ')(searchedField);
      return searchedField;
    }}
    onChange={(e) => {
      const value = e.target.value;
      action('on change event -- ')(value);
    }}
    onClick={(e) => {
      action('<<< on field click >>> ');
    }}
    value={args.value}
    defaultValue={args.defaultValue}
    autoFocus={args.autoFocus}
  />
);

export const custom = Template.bind({});
custom.args = {
  labelText: 'Label',
  // inputGroupIcon: <SearchIcon />,
  isDisabled: false,
  isInvalid: false,
  allowAutoFocus: false,
  defaultValue: '',
  showIcon: true,
  autoFocus: false,
  placeholder: 'placeholder',
  extraClassName: {
    label: '',
    inputField: '',
    iconField: '',
    width: 'w-1/2'
  }
};

export const withIcon = Template.bind({});
withIcon.args = {
  labelText: 'Label',
  isInvalid: false,
  inputGroupIcon: <SearchIcon />,
  isDisabled: false,
  defaultValue: 'with default value',
  showIcon: true,
  placeholder: '',
  autoFocus: false,
  extraClassName: {
    label: '',
    inputField: '',
    iconField: '',
    width: 'w-full'
  }
};
