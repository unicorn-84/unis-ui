# Pagination

The pagination component.

## Usage

```javascript
import { Pagination } from '@web-uni/unis';
<Pagination />
```

## Properties

### items

A number of the pagination items.

*Type:* number

*Required:* true

*Default:*

### active

The active pagination item;

*Type:* number

*Required:* false

*Default:* 1

### as

A component type or primitive that is rendered as the type of the root element.

*Type:* string | function

*Required:* false

*Default:* "nav"

### direction

The flex-direction CSS property.

*Type:* row | column | row-reverse | column-reverse

*Required:* false

*Default:* row

### align

How to align the contents along the cross axis.

*Type:* flex-start | center | flex-end | stretch

*Required:* false

*Default:* stretch

### justify

How to align the contents along the main axis.

*Type:* flex-start | center | flex-end | stretch | space-around | space-between | space-evenly

*Required:* false

*Default:* stretch

### wrap

The flex-wrap CSS propperty.

*Type:* nowrap | wrap | wrap-reverse

*Required:* false

*Default:* nowrap

### gap

The amount of spacing between child elements. This cannot be used in conjunction with 'wrap' as the gap elements will not wrap gracefully.

*Type:* xxsmall | xsmall | small | medium | large | xlarge

*Required:* false

*Default:*

### margin

The amount of margin around the component. An object can be specified to distinguish horizontal margin, vertical margin, and margin on a particular side.

*Type:*
```
  xxsmall | xsmall | small | medium | large | xlarge | none
  | {
      x:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      y:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      top:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      right:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      bottom:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      left:
        xxsmall | xsmall | small | medium | large | xlarge | none,
    }
```
*Required:* false

*Default:* none

### padding

The amount of padding around the box contents. An object can be specified to distinguish horizontal padding, vertical padding, and padding on a particular side of the box Defaults to none.

*Type:*
```
  xxsmall | xsmall | small | medium | large | xlarge | none
  | {
      x:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      y:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      top:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      right:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      bottom:
        xxsmall | xsmall | small | medium | large | xlarge | none,
      left:
        xxsmall | xsmall | small | medium | large | xlarge | none,
    }
```
*Required:* false

*Default:* none

### size

The size of the pagination items.

*Type:* "xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge"

*Required:* false

*Default:* "small"

### shape

The shape of the pagination items.

*Type:* "circular" | "rounded" | "quadratic"

*Required:* false

*Default:* "circular"

### color

Fill color and border color of the pagination items.

*Type:* "light" | "dark"

*Required:* false

*Default:* "dark"

## Intrinsic element

```
nav
```
