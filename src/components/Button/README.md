# Button

> A unis Button is used for anything that looks like a button on the screen.

## Usage

```js
import { Button } from '@web-uni/unis';

const App = () => {
  return <Button color="info">Share on Telegram</Button>;
};
```

## API

### `color`

Fill color.

**Type:** `primary | secondary | success | info | warning | error`

**Default:** `primary`

**Required:** `false`

#### Examples

```js
<Button color="error">Delete</Button>
```

## Explore

[Storybook](https://master--6039faf22bc1890023504a43.chromatic.com/?path=/story/button--button) examples.
