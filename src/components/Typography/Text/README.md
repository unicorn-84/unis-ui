# Text

Arbitrary text.

## Usage

```javascript
import { Text } from '@web-uni/unis';
<Text>Arbitrary text</Text>
```

## Properties

### variant

A arbitrary text can define its look via defined variants.

*Type:* "text" | "strong" | "small" | "button"

*Required:* false

*Default:* "text"

### as

The DOM tag or react component to use for the element.

*Type:* string | function

*Required:* false

*Default:* span

### marked

Defines text that should be marked or highlighted.

*Type:* "brandPrimary" | "brandSecondary" | "fonDark" | "fonLight" | "fonGray",

*Required:* false

*Default:*

### color

The color of the component.

*Type:* "brandPrimary" | "brandSecondary" | "textPrimary" | "textSecondary" | "textDark" | "textLight" | "textGray",

*Required:* false

*Default:*

## Intrinsic element

```
span
```
