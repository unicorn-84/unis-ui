import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import BoxComponent, { BoxProps } from '.';

export default {
  title: 'Design System/Atoms/Box',
  parameters: {
    docs: {
      description: {
        component:
          'A container that lays out its contents in one direction. Box provides CSS flexbox capabilities for layout.',
      },
    },
  },
  args: {},
  argTypes: {
    direction: {
      description: 'The flex-direction CSS property.',
      table: {
        type: {
          summary: 'row | column | row-reverse | column-reverse',
        },
        defaultValue: {
          summary: 'row',
        },
      },
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
    gap: {
      description: 'The amount of spacing between child elements.',
      table: {
        type: {
          summary: 'xxsmall | xsmall | small | medium | large | xlarge',
        },
      },
      control: {
        type: 'select',
        options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
    },
    margin: {
      description:
        'The amount of margin around the component. An object can be specified to distinguish horizontal margin, vertical margin, and margin on a particular side.',
      table: {
        type: {
          summary:
            'xxsmall | xsmall | small | medium | large | xlarge | none | object',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: {
        type: 'text',
      },
    },
    padding: {
      description:
        'The amount of padding around the box contents. An object can be specified to distinguish horizontal padding, vertical padding, and padding on a particular side of the box Defaults to none.',
      table: {
        type: {
          summary:
            'xxsmall | xsmall | small | medium | large | xlarge | none | object',
        },
        defaultValue: {
          summary: 'none',
        },
      },
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'How to align the contents along the cross axis.',
      table: {
        type: {
          summary: 'flex-start | center | flex-end | stretch',
        },
        defaultValue: {
          summary: 'stretch',
        },
      },
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end', 'stretch'],
      },
    },
    justify: {
      description: 'How to align the contents along the main axis.',
      table: {
        type: {
          summary:
            'flex-start | center | flex-end | stretch | space-around | space-between | space-evenly',
        },
        defaultValue: {
          summary: 'stretch',
        },
      },
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'stretch',
          'space-around',
          'space-between',
          'space-evenly',
        ],
      },
    },
    grow: {
      description: 'The flex-grow CSS prpperty.',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    shrink: {
      description: 'The flex-shrink CSS prpperty.',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    wrap: {
      description: 'The flex-wrap CSS propperty.',
      table: {
        type: {
          summary: 'wrap | wrap-reverse | nowrap',
        },
        defaultValue: {
          summary: 'nowrap',
        },
      },
      control: {
        type: 'select',
        options: ['wrap', 'nowrap', 'wrap-reverse'],
      },
    },
    inline: {
      description: 'If "true" the display property is "inline-flex".',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: {
          summary: 'false',
        },
      },
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const Box: Story<BoxProps> = args => (
  <BoxComponent {...args} style={{ backgroundColor: 'lavender' }}>
    <span>Item1</span>
    <span>Item2</span>
    <span>Item3</span>
    <span>Item4</span>
    <span>Item5</span>
  </BoxComponent>
);
