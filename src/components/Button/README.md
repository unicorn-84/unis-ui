# Button

> A simple button.

## Usage

```js
import { Button } from '@web-uni/unis';

const App = () => {
  return <Button>Share on Telegram</Button>;
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
<Button variant="primary">Share on Telegram</Button>
```

### `size`

The size of the component.

**Type:** `xs | sm | md | lg`

**Default:** `md`

**Required:** `false`

#### Examples

```js
<Button size="lg">Share on Telegram</Button>
```

### `fullWidth`

If true, the button will take up the full width of its container.

**Type:** `boolean`

**Default:** `false`

**Required:** `false`

#### Examples

```js
<Button fullWidth>Share on Telegram</Button>
```

### `destructive`

A destructive style of the button.

**Type:** `boolean`

**Default:** `false`

**Required:** `false`

#### Examples

```js
<Button destructive>Delete</Button>
```

### `iconStart`

Element placed before the children.
For `xs` buttons - 16x16 bounding box.
For `sm` buttons - 16x16 bounding box.
For `md` buttons - 24x24 bounding box.
For `lg` buttons - 24x24 bounding box.

**Type:** `ReactNode`

**Required:** `false`

#### Examples

```js
<Button
  iconStart={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      data-testid="test"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  }
>
  Share on Telegram
</Button>
```

### `iconEnd`

Element placed after the children.
Do not use with `iconStart`.
For `xs` buttons - 16x16 bounding box.
For `sm` buttons - 16x16 bounding box.
For `md` buttons - 24x24 bounding box.
For `lg` buttons - 24x24 bounding box.

**Type:** `ReactNode`

**Required:** `false`

#### Examples

```js
<Button
  iconEnd={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      data-testid="test"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  }
>
  Share on Telegram
</Button>
```
