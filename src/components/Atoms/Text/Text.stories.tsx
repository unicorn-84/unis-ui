import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import TextComponent, { TextProps } from '.';

export default {
  title: 'Design System/Atoms/Text',
  parameters: {
    docs: {
      description: {
        component: 'Arbitrary text.',
      },
    },
  },
  argTypes: {
    tag: {
      description: 'The DOM tag.',
      table: {
        type: {
          summary: 'p | span',
        },
      },
      control: {
        type: 'select',
        options: ['p', 'span'],
      },
    },
    variant: {
      description: 'Applies the theme typography styles.',
      table: {
        type: {
          summary: 'body | text',
        },
      },
      control: {
        type: 'select',
        options: ['body', 'text'],
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = args => (
  <TextComponent {...args}>Звёздная ночь освещает наши сны.</TextComponent>
);

export const Text = Template.bind({});

Text.args = {
  tag: 'p',
  variant: 'body',
};
