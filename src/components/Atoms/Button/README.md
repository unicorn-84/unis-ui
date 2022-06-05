# Button

> A unis Button is used for anything that looks like a button on the screen.

## Usage

```js
import { Button } from '@web-uni/unis';

const App = () => {
  return <Button color="secondary">Share on Telegram</Button>;
};
```

## API

### `color`

Fill color.

**Type:** `primary | secondary | link`

**Default:** `primary`

**Required:** `false`

#### Examples

```js
<Button color="secondary">Share on Telegram</Button>
```

### `variant`

The variant to use.

**Type:** `contained | outlined | text`

**Default:** `contained`

**Required:** `false`

#### Examples

```js
<Button variant="outlined">Reset</Button>
```

### `disabled`

If `true`, the component is disabled.

**Type:** `boolean`

**Default:** `false`

**Required:** `false`

#### Examples

```js
<Button disabled>Accept</Button>
```

## Explore

[Storybook](https://master--6039faf22bc1890023504a43.chromatic.com/?path=/story/button--button) examples.
