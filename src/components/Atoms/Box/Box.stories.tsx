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
    display: {
      description: 'The CSS display property.',
      table: {
        type: {
          summary: 'block | inline-block | flex | inline-flex',
        },
        defaultValue: {
          summary: 'flex',
        },
      },
      control: {
        type: 'select',
        options: ['block', 'inline-block', 'flex', 'inline-flex'],
      },
    },
    basis: {
      description: "A fixed or relative size along its container's main axis.",
      table: {
        type: {
          summary: 'auto | full | 1/2 | 1/3 | 1/4 | 2/3 | 2/4 | 3/4 | string',
        },
      },
      control: {
        type: 'select',
        options: ['auto', 'full', '1/2', '1/3', '1/4', '2/3', '2/4', '3/4'],
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
