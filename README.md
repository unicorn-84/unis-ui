# 🦄 unis-ui

> UI components built with ReactJS and Tailwind CSS.

[![version](https://img.shields.io/npm/v/unis-ui)](https://www.npmjs.com/package/unis-ui) [![build workflow](https://github.com/unicorn-84/unis-ui/actions/workflows/build.yml/badge.svg)](https://github.com/unicorn-84/unis-ui/actions/workflows/build.yml) [![codecov](https://codecov.io/gh/unicorn-84/unis-ui/branch/master/graph/badge.svg?token=JGF2MPS3M9)](https://codecov.io/gh/unicorn-84/unis-ui) [![MIT license](https://img.shields.io/github/license/unicorn-84/unis-ui)](https://github.com/unicorn-84/unis-ui/blob/master/LICENSE) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## What it is

This is ReactJS components with TailwindCSS classes.

## Getting started

### Installation

Using npm:

```bash
npm i unis-ui
```

Using yarn:

```bash
yarn add unis-ui
```

### Configuration

Add the path to **unis-ui** files in your `tailwind.config.js` file.

```js
// tailwind.config.js
...
content: [
  ...
  './node_modules/unis-ui/lib/**/*.{js,jsx,ts,tsx}'
]
```

### Usage

```js
import { Button } from 'unis-ui';

const App = () => {
  return <Button>Share on Telegram</Button>;
};
```

## Requirements

- The **unis-ui** library is ESM.

- The **unis-ui** library requires [Node.js](https://nodejs.org) version 14 or higher.

- The **unis-ui** library requires [ReactJS](https://reactjs.org) version 16 or higher.

- The **unis-ui** library requires [TailwindCSS](https://tailwindcss.com) version 3 or higher.

## License

[MIT](https://github.com/unicorn-84/unis-ui/blob/master/LICENSE)
