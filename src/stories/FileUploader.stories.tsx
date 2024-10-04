import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FileUploader } from "../components/common/FileUploader";
import { InfoOutlinedIcons } from "../components/common/Icons/InfoIcon";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/FileUploader",
  component: FileUploader,
  argTypes: {
    title: {
      description: "Title for file upload box",
    },
    handleFileChange: {
      description: "Callback for file upload",
    },
    type: {
      description: "String array for file types",
    },
    size: {
      description: "Size of file in kbs",
    },
    allowMultipleFile: {
      control: "boolean",
      description: "For selecting multiple files",
    },
    children: {
      description: "Children/content of the upload box",
    },
    height: {
      description: "Height for a box in px, min: 289px",
    },
    width: {
      description: "Width for a box in px, min: 320px",
    },
    maxCount: {
      description: "Maximum number of files need to be added",
    },
    helperIcon: {
      description: "Any icon with title",
    },
  },
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => (
  <FileUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: ` Upload documents or proofs for this certificate`,
  handleFileChange: action("File Uploaded"),
  type: [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "video/mp4",
    "audio/mp3",
    "audio/webm",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-excel",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "text/csv",
  ],
  size: 5000000,
  helperIcon: <InfoOutlinedIcons color="disabled" />,
  children: (
    <span className="flex items-center space-x-2">
      <div>
        <span className="header-text text-dark-grey">
          Drag & Drop video to upload
        </span>
        <br />
        <span className="secondary-text ">
          (300 MB size, accepted formats MPEG, MP4)
        </span>
      </div>
    </span>
  ),
  height: 289,
  width: 320,
};
