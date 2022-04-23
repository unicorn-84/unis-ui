# Link

> A text link.

## Usage

```js
import { Link } from '@web-uni/unis';

const App = () => {
  return (
    <Link href="https://developer.mozilla.org" color="secondary">
      mdn
    </Link>
  );
};
```

## API

### `color`

Fill color.

**Type:** `primary | secondary`

**Default:** `primary`

**Required:** `false`

#### Examples

```js
<Link href="https://developer.mozilla.org" color="secondary">
  mdn
</Link>
```

### `variant`

The variant to use.

**Type:** `text | contained | outlined`

**Default:** `text`

**Required:** `false`

#### Examples

```js
<Link href="https://developer.mozilla.org" variant="contained">
  MDN
</Link>
```

## Explore

[Storybook](https://master--6039faf22bc1890023504a43.chromatic.com/?path=/story/link--link) examples.
