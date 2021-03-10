# Heading

Heading text.

## Usage

```javascript
import { Heading } from '@web-uni/unis';
<Heading level="h1" variant="title">Heading text</Heading>
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

### level

The heading level.

*Type:* "h1" | "h2" | "h3" | "h4"

*Required:* true

*Default:*

### variant

A heading text can define its look via defined variants.

*Type:* "title" | "h2" | "h3" | "h4"

*Required:* true

*Default:*

## Intrinsic element

```
h1 | h2 | h3 | h4
```
