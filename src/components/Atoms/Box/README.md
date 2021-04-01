# Box

A container that lays out its contents in one direction. Box provides CSS flexbox capabilities for layout.

## Usage

```javascript
import { Box } from '@web-uni/unis';
<Box>Content</Box>
```

## Properties

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

## Intrinsic element

```
div
```
