import "!style-loader!css-loader!sass-loader!../src/styles/global.scss";
// import "!style-loader!css-loader!sass-loader!../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
