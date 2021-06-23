import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import TextComponent, { TextProps } from '.';

export default {
  title: 'Design System/Typography/Text',
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
    color: {
      description: 'The color of the component.',
      table: {
        type: {
          summary:
            'brandPrimary | brandSecondary | textPrimary | textSecondary | textDark | textLight | textGray',
        },
        defaultValue: {
          summary: 'textSecondary',
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
  },
} as Meta;

const Template: Story<TextProps> = args => (
  <TextComponent {...args}>Звёздная ночь освещает наши сны.</TextComponent>
);

export const Text = Template.bind({});

Text.args = {};
