import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import PaginationComponent, { PaginationProps } from '.';

export default {
  title: 'Design System/Molecules/Pagination',
  parameters: {
    docs: {
      description: {
        component: 'The pagination',
      },
    },
  },
  args: {},
  argTypes: {
    items: {
      description: 'A number of the pagination items.',
      table: {
        type: {
          summary: 'number',
        },
      },
      control: {
        type: 'number',
      },
    },
    color: {
      description: 'Fill color and border color of the pagination items.',
      table: {
        type: {
          summary: 'light | dark',
        },
        defaultValue: {
          summary: 'dark',
        },
      },
      control: {
        type: 'select',
        options: ['light', 'dark'],
      },
    },
    active: {
      description: 'The active pagination item;',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: 1,
        },
      },
      control: {
        type: 'number',
      },
    },
    size: {
      description: 'The size of the pagination items.',
      table: {
        type: {
          summary: 'xxsmall | xsmall | small | medium | large | xlarge',
        },
        defaultValue: {
          summary: 'small',
        },
      },
      control: {
        type: 'select',
        options: ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      },
    },
    shape: {
      description: 'The shape of the pagination items.',
      table: {
        type: {
          summary: 'circular | rounded | quadratic',
        },
        defaultValue: {
          summary: 'circular',
        },
      },
      control: {
        type: 'select',
        options: ['circular', 'rounded', 'quadratic'],
      },
    },
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
  },
} as Meta;

export const Pagination: Story<PaginationProps> = args => (
  <PaginationComponent {...args} />
);

Pagination.args = {
  items: 5,
};
