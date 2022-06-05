# InputText

> A text input.

## API

### `label`

The label text.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<InputText label="Username" />
```

### `size`

The size of the component.

**Type:** `sm | md`

**Default:** `md`

**Required:** `false`

#### Examples

```js
<InputText size="sm" />
```

### `error`

If true, the component is displayed in an error state.

**Type:** `boolean`

**Required:** `false`

**Default:** `false`

#### Examples

```js
<InputText error />
```

### `errorMessage`

The error message. Required the error.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<InputText error errorMessage="Validation message text" />
```

### `disabled`

If true, the component is disabled.

**Type:** `boolean`

**Required:** `false`

**Default:** `false`

#### Examples

```js
<InputText disabled />
```

### `helperText`

The helper text. Required the label.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<InputText
  helperText="This is an assistive text for the user"
  label="Username"
/>
```

### `labelClass`

Classes applied to the native label.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<InputText label="Username" labelClass="class" />
```

### `id`

The id of the native input element.

**Type:** `string`

**Required:** `false`

#### Examples

```js
<InputText id="username" />
```

## Explore

[Storybook](https://master--6039faf22bc1890023504a43.chromatic.com/?path=/story/inputtext--input-text) examples.
