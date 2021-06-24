# Box

A container that lays out its contents in one direction. Box provides CSS flexbox capabilities for layout.

## Usage

```javascript
import { Box } from '@web-uni/unis';
<Box>Content</Box>
```

## Properties

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

### grow

The flex-grow CSS property.

*Type:* number

*Required:* false

*Default:* 0

### shrink

The flex-shrink CSS property.

*Type:* number

*Required:* false

*Default:* 1

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

### as

The DOM tag or react component to use for the element.

*Type:* string | function

*Required:* false

*Default:* div

### display

The CSS display property.

*Type:* block | inline-block | flex | inline-flex

*Required:* false

*Default:* flex

### basis

A fixed or relative size along its container's main axis.

*Type:* auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string

*Required:* false

*Default:*

### fill

Whether the width and/or height should fill the container.

*Type:* true | false | horizontal | vertical

*Required:* false

*Default:*

### height

A fixed height.

*Type:*
```
  auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
  | {
      height: auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
      max: auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
      min: auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
    }
```

*Required:* false

*Default:*

### width

A fixed width.

*Type:*
```
  auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
  | {
      height: auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
      max: auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
      min: auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string
    }
```

*Required:* false

*Default:*

## Intrinsic element

```
div
```
