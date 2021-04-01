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
  xxsmall | xsmall | small | medium | large | xlarge
  | {
      x:
        xxsmall | xsmall | small | medium | large | xlarge,
      y:
        xxsmall | xsmall | small | medium | large | xlarge,
      top:
        xxsmall | xsmall | small | medium | large | xlarge,
      right:
        xxsmall | xsmall | small | medium | large | xlarge,
      bottom:
        xxsmall | xsmall | small | medium | large | xlarge,
      left:
        xxsmall | xsmall | small | medium | large | xlarge,
    }
```
*Required:* false

*Default:*

## Intrinsic element

```
div
```
