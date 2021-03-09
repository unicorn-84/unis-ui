# Text

Arbitrary text.

## Usage

```javascript
import { Text } from '@web-uni/unis';
<Text>Arbitrary text</Text>
```

## Properties

### children

The content of the component.

*Type:* node

*Required:* false

*Default:*

### className

Class to be applied to the root element.

*Type:* string

*Required:* false

*Default:*

### a11yLabel

Custom label to be used by screen readers. When provided, an aria-label will be added to the element.

*Type:* string

*Required:* false

*Default:*

### variant

A arbitrary text can define its look via defined variants.

*Type:* "text" | "strong" | "small" | "button"

*Required:* false

*Default:* "text"

### tag

The DOM tag.

*Type:* "span"

*Required:* false

*Default:* "span"

## Intrinsic element

```
span
```
