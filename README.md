# Storybook components

## Storybook UI

### Start storybook UI and run tailwind compiler

```sh
npm run start-ui
npm run tailwind-server
```

### Build storybook UI and run tailwind compiler for minified version

```sh
npm run build-ui
npm run tailwind-build
```

---

## Add new component and export it

1. Add new component under the src/components, e.g. Table.tsx
2. Add storybook doc under the src/stories, e.g. Table.stories.tsx
3. In src/index.ts export the component, So we can use it in other application

---

## Build package and use it in other project locally

### Build the package

```sh
npm run build-package
```

### Link package to npm

```sh
npm link
```

### Add link to other project

```sh
npm link @greenstory/storybook-components
```

### Import component and use it e.g.

```tsx
import { Button } from "@greenstory/storybook-components";
import "@greenstory/storybook-components/dist/index.css";

<Button
  label="Submit"
  onClick={() => {
    console.log("Submit clicked");
  }}
/>;
```

---

## Commit message format

Note: NAME is optional, we can remove that including the braces e.g. fix: COMMIT_MESSAGE

### Patch release

- fix(NAME): COMMIT_MESSAGE
  It will increase the PATCH version: e.g. 1.0.0 -> 1.0.1

### Minor release

- feat(NAME): COMMIT_MESSAGE
  It will increase the MINOR version: e.g. 1.0.0 -> 1.1.0

### Major release

- feat(NAME): COMMIT_MESSAGE
  BREAKING CHANGE: RELEVANT_MESSAGE

It will increase the MAJOR version: e.g. 1.0.0 -> 2.0.0

### Other commit message

we can use below type which will not release the package:

- docs: COMMIT_MESSAGE
- refactor: COMMIT_MESSAGE
- config: COMMIT_MESSAGE
- test: COMMIT_MESSAGE
- no-release: COMMIT_MESSAGE

---

## How to use the published package on gitlab in other application

```sh
# Set the config in npm(One time only)
npm config set @greenstory:registry https://gitlab.com/api/v4/projects/35992405/packages/npm/
npm config set -- '//gitlab.com/api/v4/projects/35992405/packages/npm/:_authToken' "YOUR_AUTH_TOKEN"

# Install the package
npm i @greenstory/storybook-components
```