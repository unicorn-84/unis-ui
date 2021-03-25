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
  },
} as Meta;

const Template: Story<LinkProps> = args => (
  <LinkComponent {...args}>Inline Link</LinkComponent>
);

export const Link = Template.bind({});

Link.args = {};
