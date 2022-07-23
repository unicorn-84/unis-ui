# unis

> UI components built with ReactJS and Tailwind CSS.

[![version](https://img.shields.io/npm/v/@web-uni/unis)](https://www.npmjs.com/package/@web-uni/unis) [![build workflow](https://github.com/unicorn-84/unis/actions/workflows/build.yml/badge.svg)](https://github.com/unicorn-84/unis/actions/workflows/build.yml) [![codecov](https://codecov.io/gh/unicorn-84/unis/branch/master/graph/badge.svg?token=JGF2MPS3M9)](https://codecov.io/gh/unicorn-84/unis) [![MIT license](https://img.shields.io/github/license/unicorn-84/unis)](https://github.com/unicorn-84/unis/blob/master/LICENSE) [![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

## What it is

This is ReactJS components with TailwindCSS classes.

## Getting started

### Installation

Using npm:

```bash
npm install @web-uni/unis
```

Using yarn:

```bash
yarn add @web-uni/unis
```

### Configuration

Add the path to **unis** files in your `tailwind.config.js` file.

```js
// tailwind.config.js
...
content: [
  ...
  './node_modules/unis/lib/**/*.{js,jsx,ts,tsx}'
]
```

### Usage

```js
import { Button } from 'unis';

const CustomButton = () => {
  return <Button>Share on Telegram</Button>;
};
```

## Requirements

- The **unis** library is ESM.

- The **unis** library requires [Node.js](https://nodejs.org) version 14 or higher.

- The **unis** library requires [ReactJS](https://reactjs.org) version 16 or higher.

- The **unis** library requires [TailwindCSS](https://tailwindcss.com) version 3 or higher.

## License

[MIT](https://github.com/unicorn-84/unis/blob/master/LICENSE)
