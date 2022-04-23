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

**Type:** `link | primary | secondary`

**Default:** `link`

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

### `href`

The URL to link.

**Type:** `string`

**Required:** `true`

#### Examples

```js
<Link href="https://developer.mozilla.org">mdn</Link>
```

## Explore

[Storybook](https://master--6039faf22bc1890023504a43.chromatic.com/?path=/story/link--link) examples.
