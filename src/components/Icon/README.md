# Icon

> An icon container.

## Usage

```js
import { Icon } from '@web-uni/unis';

const App = () => {
  return (
    <Icon
      icon={
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path
            d="M11.5125 18.5125H3.51245V10.5125"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 23C28.0008 20.626 27.2975 18.305 25.979 16.3308C24.6605 14.3566 22.786 12.8179 20.5928 11.9092C18.3995 11.0006 15.986 10.763 13.6576 11.2264C11.3293 11.6898 9.1907 12.8334 7.51245 14.5125L3.51245 18.5125"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    />
  );
};
```

## API

### `icon`

An icon element.

**Type:** `ReactNode`

**Required:** `true`

#### Examples

```js
<Icon
  icon={
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M11.5125 18.5125H3.51245V10.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 23C28.0008 20.626 27.2975 18.305 25.979 16.3308C24.6605 14.3566 22.786 12.8179 20.5928 11.9092C18.3995 11.0006 15.986 10.763 13.6576 11.2264C11.3293 11.6898 9.1907 12.8334 7.51245 14.5125L3.51245 18.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  }
/>
```

### `size`

The size of the component.

**Type:** `xs | sm | md`

**Default:** `sm`

**Required:** `false`

#### Examples

```js
<Icon
  size="md"
  icon={
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M11.5125 18.5125H3.51245V10.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 23C28.0008 20.626 27.2975 18.305 25.979 16.3308C24.6605 14.3566 22.786 12.8179 20.5928 11.9092C18.3995 11.0006 15.986 10.763 13.6576 11.2264C11.3293 11.6898 9.1907 12.8334 7.51245 14.5125L3.51245 18.5125"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  }
/>
```
