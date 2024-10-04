import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Popup } from "../components/common/Popup";
import { Button } from "../components/common/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Popup",
  component: Popup,
  argTypes: {
    modalLabel: {
      description: 'label to show before opening the modal, it is a element to pass dynamically',
    },
    headerLabel: {
      description: 'optional field to pass as string to show as header on popup'
    },
    size: {
      description: 'prop to pass size of the modal it can be `small, mid,large, extra large`'
    },
    allowOutsideClicks: {
      description: 'boolean prop to pass to close modal if user clicks outside of the modal',
    },
    modalContent: {
      description: 'a prop to pass dynamic content as as element/container'
    },
    contentClasses: {
      description: 'a css class as object to pass to apply custom CSS in modal container'
    },
    allowCloseIcon: {
      description: 'an optional flag to pass to show close icon at right end of the modal'
    },
    isOpen: {
      description: 'a flag to manage popup open and close event.'
    },
    setModalState: {
      description: 'returns a callback with a boolean value to know modal is open or closed.'
    },
    modalId: {
      description: '(optional field) an unique id to pass for each modal'
    }
  },
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => (
  <Popup
    {...args}
    setModalState={(value: boolean) => {
      action("<<< modal close/open event fired >>> event value ---> ")(value);
    }}
  />
);

export const labelAsText = Template.bind({});

labelAsText.args = {
  modalLabel: <div>modal as label</div>,
  headerLabel: "Header",
  size: "md",
  allowOutsideClicks: true,
  modalContent: <> default modal </>,
  contentClasses: {
    padding: '10px',
  },
  allowCloseIcon: true,
  isOpen: false,
};

export const labelAsLink = Template.bind({});
labelAsLink.args = {
  modalLabel: <Button accent="link"> Modal As Link </Button>,
  headerLabel: "Header",
  size: "md",
  allowOutsideClicks: false,
  modalContent: <> default modal </>,
  contentClasses: {},
  allowCloseIcon: true,
  isOpen: false,
};

const dummyContent = () => {
  return (
    <>
      <h1 className="mb-2">HTML Ipsum Presents</h1>

      <p>
        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus
        et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
        placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
        pharetra. Vestibulum erat wisi, condimentum sed,{" "}
        <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
        elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar
        facilisis. Ut felis.
      </p>

      <h2 className="mt-20 mb-20 bg-red-500">Header Level 2</h2>

      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
          molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
          mollis, tellus est malesuada tellus, at luctus turpis elit sit amet
          quam. Vivamus pretium ornare est.
        </p>
      </blockquote>

      <h3>Header Level 3</h3>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>
    </>
  );
};

export const labelAsButton = Template.bind({});
labelAsButton.args = {
  modalLabel: <Button> Modal Button </Button>,
  headerLabel: "Header",
  size: "md",
  allowOutsideClicks: false,
  modalContent: <div>{dummyContent()}</div>,
  contentClasses: {},
  allowCloseIcon: false,
  isOpen: false,
};
