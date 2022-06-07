# ButtonBase

> A simple button.

## Usage

```js
import { ButtonBase } from '@web-uni/unis';

const App = () => {
  return <ButtonBase>Share on Telegram</ButtonBase>;
};
```

## API

### `variant`

The variant of the component.

**Type:** `primary | outline primary | outline gray | ghost`

**Default:** `primary`

**Required:** `false`

#### Examples

```js
<ButtonBase variant="primary">Accept</ButtonBase>
```

### `size`

The size of the component.

**Type:** `xs | sm | md | lg`

**Default:** `md`

**Required:** `false`

#### Examples

```js
<ButtonBase size="lg">Accept</ButtonBase>
```

### `fullWidth`

If true, the button will take up the full width of its container.

**Type:** `boolean`

**Default:** `false`

**Required:** `false`

#### Examples

```js
<ButtonBase fullWidth>Accept</ButtonBase>
```

### `destructive`

A destructive style of the button.

**Type:** `boolean`

**Default:** `false`

**Required:** `false`

#### Examples

```js
<ButtonBase destructive>Accept</ButtonBase>
```

## Explore

[Storybook](https://master--6039faf22bc1890023504a43.chromatic.com/?path=/story/button--button) examples.
