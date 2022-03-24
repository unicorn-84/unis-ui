import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import LinkComponent, { LinkProps } from '.';

export default {
  title: 'Design System/Atoms/Link',
  parameters: {
    docs: {
      description: {
        component: 'A text link.',
      },
    },
  },
  args: {
    href: '#',
  },
  argTypes: {
    href: {
      table: {
        disable: true,
      },
    },
    disabled: {
      description: 'Whether the anchor is disabled.',
      table: {
        type: {
          summary: 'true | false',
        },
        defaultValue: {
          summary: false,
        },
      },
      control: {
        type: 'boolean',
      },
    },
    underline: {
      description: 'Controls when the link should have an underline.',
      table: {
        type: {
          summary: 'always | none',
        },
      },
      control: {
        type: 'select',
        options: ['always', 'none'],
      },
    },
    marked: {
      description: 'Defines text that should be marked or highlighted.',
      table: {
        type: {
          summary:
            'brandPrimary | brandSecondary | fonDark | fonLight | fonGray',
        },
      },
      control: {
        type: 'select',
        options: [
          'brandPrimary',
          'brandSecondary',
          'fonDark',
          'fonLight',
          'fonGray',
        ],
      },
    },
    variant: {
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary: 'text | strong | small | button',
        },
        defaultValue: {
          summary: 'text',
        },
      },
      control: {
        type: 'select',
        options: ['text', 'strong', 'small', 'button'],
      },
    },
    color: {
      description: 'The color of the component.',
      table: {
        type: {
          summary:
            'brandPrimary | brandSecondary | textPrimary | textSecondary | textDark | textLight | textGray',
        },
      },
      control: {
        type: 'select',
        options: [
          'brandPrimary',
          'brandSecondary',
          'textPrimary',
          'textSecondary',
          'textDark',
          'textLight',
          'textGray',
        ],
      },
    },
  },
} as Meta;

const Template: Story<LinkProps> = args => (
  <LinkComponent {...args}>Inline Link</LinkComponent>
);

export const Link = Template.bind({});

Link.args = {};
