# Input

> An input.

## API

### `label`

The label text.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<Input label="Username" />
```

### `size`

The size of the component.

**Type:** `sm | md`

**Default:** `md`

**Required:** `false`

#### Examples

```js
<Input size="sm" />
```

### `error`

If true, the component is displayed in an error state.

**Type:** `boolean`

**Required:** `false`

**Default:** `false`

#### Examples

```js
<Input error />
```

### `errorMessage`

The error message. Required the error.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<Input error errorMessage="Validation message text" />
```

### `disabled`

If true, the component is disabled.

**Type:** `boolean`

**Required:** `false`

**Default:** `false`

#### Examples

```js
<Input disabled />
```

### `helperText`

The helper text. Required the label.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<Input helperText="This is an assistive text for the user" label="Username" />
```

### `labelClass`

Classes applied to the native label.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<Input label="Username" labelClass="class" />
```

### `id`

The id of the native input element.
Use this prop to make label accessible for screen readers.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<Input id="username" label="Username" />
```

### `type`

Type of the `input` element.

**Type:** `text | email | password`

**Required:** `false`

**Default:** `text`

#### Examples

```js
<Input type="email" />
```
