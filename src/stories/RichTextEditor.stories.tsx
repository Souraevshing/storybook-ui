// import React from "react";
// import RichTextEditor from "../components/common/RichTextEditor/RichTextEditor";
// import { ComponentStory, ComponentMeta } from "@storybook/react";

// export default {
//   title: "Components/RichTextEditor",
//   component: RichTextEditor,
//   argTypes: {
//     toolbarStyle: { description: "To control the styles of toolbar" },
//     editorStyle: { description: "To control the styles of editor" },
//     wrapperStyle: {
//       description: "To control the styles of overall text editor",
//     },
//     readOnly: {
//       control: "boolean",
//       description: "true/false to control read only mode",
//     },
//     spellCheck: { control: "boolean", description: "spellcheck" },
//     onEditorStateChanger: {
//       description: "function to invoke when change in editor found",
//     },
//     placeholder: { description: "placeholder of the editor" },
//     onChange: {
//       description: "function to invoke when change in overall component found",
//     },
//     fontFamilyOptions: {
//       description:
//         "provide the list of valid font families as array of strings",
//     },
//     inlineOptions: { description: "toolbar features" },
//   },
// } as ComponentMeta<typeof RichTextEditor>;

// const Template: ComponentStory<typeof RichTextEditor> = (args: any) => (
//   <RichTextEditor {...args} />
// );

// export const TextEditor = Template.bind({});
// TextEditor.args = {
//   toolbarStyle: {
//     minWidth: 730,
//     minHeight: 46,
//     marginBottom: 4.5,
//     padding: 0,
//     border: "1px solid #D9D9D9",
//     boxSizing: "border-box",
//   },
//   editorStyle: {
//     minHeight: 164,
//     border: "1px solid #D9D9D9",
//     padding: "11px 12px",
//     lineHeight: "1.0",
//     backgroundColor: "#FEFEFE",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxSizing: "border-box",
//     fontFamily: "Sofia Pro",
//   },
//   wrapperStyle: {
//     minWidth: 730,
//     margin: 0,
//     padding: 0,
//     borderTopLeftRadius: "8px",
//     borderTopRightRadius: "8px",
//     boxSizing: "border-box",
//     fontFamily: "Sofia Pro",
//   },
//   readonly: false,
//   spellCheck: true,
//   placeholder: "Auto pulled when we select the verifier ",
//   onChange: () => {
//     console.log("change");
//   },
//   fontFamilyOptions: [
//     "Mulish",
//     "Sofia pro",
//     "Impact",
//     "Open Sans",
//     "Roboto",
//     "Tahoma",
//     "Verdana",
//   ],
//   inlineOptions: ["bold", "italic", "underline", "strikethrough"],
//   onEditorStateChangeProp: (editorState: any) => {
//     console.log(editorState.getCurrentContent().getPlainText());
//   },
// };
