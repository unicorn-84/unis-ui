# Link

> A text link.

## Usage

```js
import { Link } from 'unis-ui';

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
