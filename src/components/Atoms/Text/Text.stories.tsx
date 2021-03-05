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
    tag: {
      description: 'The DOM tag.',
      table: {
        type: {
          summary: 'span',
        },
        defaultValue: {
          summary: 'span',
        },
      },
      control: {
        type: 'select',
        options: ['span'],
      },
    },
  },
} as Meta;

const Template: Story<TextProps> = args => (
  <TextComponent {...args}>Звёздная ночь освещает наши сны.</TextComponent>
);

export const Text = Template.bind({});

Text.args = {
  tag: 'span',
  variant: 'text',
};
