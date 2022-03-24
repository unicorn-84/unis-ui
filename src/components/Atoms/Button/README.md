# Button

A button.

## Usage

```javascript
import { Button } from '@web-uni/unis';
<Button>Content</Button>
```

## Properties

### color

Fill color or border color.

*Type:* primary | secondary

*Required:* false

*Default:* primary

### disabled

If 'true', the component is disabled.

*Type:* true | false

*Required:* false

*Default:* false

### fullWidth

If 'true', the button will take up the full width of its container.

*Type:* true | false

*Required:* false

*Default:* false

### variant

The variant to use.

*Type:* text | outlined | contained

*Required:* false

*Default:* contained

### href

Defines the href to navigate to. If applied, will render the button as an anchor element by default.

*Type:* string

*Required:* false

*Default:*

## Intrinsic element

```
button | a
```
