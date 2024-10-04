// import React, { Component } from "react";
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState } from "draft-js";
// import { useState } from "react";
// import "../../../styles/components/richTextEditorStyle.scss";

// import bold from "../../../styles/assets/images/bold.svg";
// import italic from "../../../styles/assets/images/italic.svg";
// import underline from "../../../styles/assets/images/underline.svg";
// import strikethrough from "../../../styles/assets/images/strikethrough.svg";
// import superscript from "../../../styles/assets/images/superscript.svg";
// import subscript from "../../../styles/assets/images/subscript.svg";
// import unordered from "../../../styles/assets/images/unordered.svg";
// import ordered from "../../../styles/assets/images/ordered.svg";
// import indent from "../../../styles/assets/images/indent.svg";
// import embedded from "../../../styles/assets/images/embedded.svg";
// import outdent from "../../../styles/assets/images/outdent.svg";
// import link from "../../../styles/assets/images/link.svg";
// import unlink from "../../../styles/assets/images/unlink.svg";
// import image from "../../../styles/assets/images/image.svg";
// import eraser from "../../../styles/assets/images/eraser.svg";
// import undo from "../../../styles/assets/images/undo.svg";
// import redo from "../../../styles/assets/images/redo.svg";

// interface IEditorProps {
//   toolbarStyle: object;
//   editorStyle: object;
//   wrapperStyle: object;
//   readOnly: boolean;
//   spellCheck: boolean;
//   onEditorStateChangeProp: (editorState: any) => void;
//   onChange: () => void;
//   placeholder: string;
//   fontFamilyOptions: string[];
//   inlineOptions: string[];
// }

// const EditorComponent: React.FC<IEditorProps> = ({
//   toolbarStyle,
//   editorStyle,
//   wrapperStyle,
//   readOnly,
//   spellCheck,
//   onEditorStateChangeProp,
//   placeholder,
//   onChange,
//   fontFamilyOptions,
//   inlineOptions,
// }) => {
//   let editorState = EditorState.createEmpty();

//   const [description, setDescription] = useState(editorState);

//   const onEditorStateChange = (editorState: any) => {
//     setDescription(editorState);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: 510,
//       }}
//     >
//       <Editor
//         toolbar={{
//           inline: {
//             options: inlineOptions,
//             bold: { icon: bold, className: "option-custom" },
//             italic: { icon: italic, className: "option-custom" },
//             underline: { icon: underline, className: "option-custom" },
//             strikethrough: {
//               icon: strikethrough,
//               className: "option-custom",
//             },
//             monospace: { className: "option-custom" },
//             superscript: {
//               icon: superscript,
//               className: "option-custom",
//             },
//             subscript: { icon: subscript, className: "option-custom" },
//           },
//           blockType: {
//             className: "option-custom-wide",
//             dropdownClassName: "dropdown-custom",
//           },
//           fontSize: { className: "option-custom-medium" },
//           list: {
//             unordered: { icon: unordered, className: "option-custom" },
//             ordered: { icon: ordered, className: "option-custom" },
//             indent: { icon: indent, className: "option-custom" },
//             outdent: { icon: outdent, className: "option-custom" },
//           },
//           textAlign: {
//             left: { className: "option-custom" },
//             center: { className: "option-custom" },
//             right: { className: "option-custom" },
//             justify: { className: "option-custom" },
//           },
//           fontFamily: {
//             className: "font-family",
//             dropdownClassName: "dropdown-custom",
//             options: fontFamilyOptions,
//           },
//           colorPicker: {
//             className: "option-custom",
//             popupClassName: "popup-custom",
//           },
//           link: {
//             popupClassName: "popup-custom",
//             link: { icon: link, className: "option-custom" },
//             unlink: { icon: unlink, className: "option-custom" },
//           },
//           emoji: {
//             className: "option-custom",
//             popupClassName: "popup-custom",
//           },
//           embedded: {
//             icon: embedded,
//             className: "embedded",
//             popupClassName: "popup-custom",
//             defaultSize: {
//               height: "",
//               width: "",
//             },
//           },
//           image: {
//             icon: image,
//             className: "option-custom",
//             popupClassName: "popup-custom",
//             defaultSize: {
//               height: "",
//               width: "",
//             },
//           },
//           remove: { icon: eraser, className: "option-custom" },
//           history: {
//             undo: { icon: undo, className: "option-custom" },
//             redo: { icon: redo, className: "option-custom" },
//           },
//         }}
//         readOnly={readOnly}
//         spellCheck={spellCheck}
//         onChange={onChange}
//         placeholder={placeholder}
//         wrapperClassName="wrapper-class"
//         editorClassName="editor-class"
//         toolbarClassName="toolbar-class"
//         wrapperStyle={wrapperStyle}
//         editorStyle={editorStyle}
//         toolbarStyle={toolbarStyle}
//         onEditorStateChange={(editorState) => {
//           onEditorStateChangeProp(editorState);
//           onEditorStateChange(editorState);
//         }}
//         editorState={description}
//       />
//     </div>
//   );
// };
// export default EditorComponent;
